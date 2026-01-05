import api from "../../api/axios";
export const registerService = (payload) => {
  return api.post("/auth/register", payload);
};

export const loginService = (payload) => {
  return api.post("/auth/login", payload);
};
