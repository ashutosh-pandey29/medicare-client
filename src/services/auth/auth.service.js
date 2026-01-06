import api from "../../api/axios";
export const registerService = (payload) => {
  return api.post("/auth/register", payload);
};

export const loginService = (payload) => {
  return api.post("/auth/login", payload);
};

export const forgotPasswordService = (payload) => {
  return api.post("/auth/forgot-password", payload);
};




export const RefreshTokenService = () => {
  return api.get("/auth/refresh-token");
}


export const myAccount = () => {
  return api.get("/auth/me");
}