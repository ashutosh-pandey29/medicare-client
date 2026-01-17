import api from "../../api/axios";

export const fetchDoctorProfileService = () => {
  return api.get("/doctor/me");
};

export const createDoctorProfileService = (payload) => {
  return api.post("/doctor/profile" ,  payload)
}