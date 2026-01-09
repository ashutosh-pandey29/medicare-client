import api from "../../api/axios";
export const registerService = (payload) => {
  return api.post("/auth/register", payload);
};

export const verifyEmailService = (token) => {
  return api.get(`/auth/verify-email/${token}`);
};

export const loginService = (payload) => {
  return api.post("/auth/login", payload);
};

export const forgotPasswordService = (payload) => {
  return api.post("/auth/forgot-password", payload);
};

export const resetPasswordService = (payload) => {
  return api.post("/auth/reset-password", payload);
};

export const RefreshTokenService = () => {
  return api.get("/auth/refresh-token");
};

export const myAccount = () => {
  return api.get("/auth/me");
};

export const updateAccountService = (payload) => {
  return api.put("auth/update-account", payload);
};

export const updatePasswordService = (payload) => {
  return api.put("/auth/update-password", payload);
}

export const logoutService = () => {
  return api.post("/auth/logout");
};

