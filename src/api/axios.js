import axios from "axios";
import { RefreshTokenService } from "../services/auth/auth.service";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor (token attach)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// response interceptor (data + error)
api.interceptors.response.use(
  (response) => response.data,

  async (error) => {
    const originalRequest = error.config;
    const serverErr = error.response?.data;

    // console.log(originalRequest);
    // console.log(serverErr);

    //Access token expired
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        // refresh token cookie automatically send
        const res = await RefreshTokenService();

        console.log("res", res);

        const newAccessToken = res.data.accessToken;

        // save new token
        localStorage.setItem("accessToken", newAccessToken);

        // update header
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // retry original request
        return api(originalRequest);
      } catch (refreshErr) {
        // console.log("refreshErr", refreshErr);
        // any error in refresh token generation then logout
        localStorage.removeItem("accessToken");
        window.location.href = "/auth/login";
        return Promise.reject(refreshErr);
      }
    }

    if (
      error.response?.status === 503 &&
      !window.location.pathname.startsWith("/auth") &&
      window.location.pathname !== "/maintenance"
    ) {
      window.location.href = "/maintenance";
      return Promise.reject(error);
    }

    // backend error
    if (serverErr) {
      return Promise.reject(serverErr);
    }

    // network / unknown error
    return Promise.reject({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
);

export default api;
