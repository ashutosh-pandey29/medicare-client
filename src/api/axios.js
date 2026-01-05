import axios from "axios";

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
  (error) => Promise.reject(error)
);

// response interceptor (data + error)
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const serverErr = error.response?.data;

    if (serverErr) {
      return Promise.reject(serverErr);
    }

    // fallback (network error, timeout etc.)
    return Promise.reject({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
);

export default api;
