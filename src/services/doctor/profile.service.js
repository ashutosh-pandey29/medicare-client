import api from "../../api/axios";

export const fetchDoctorProfileService = () => {
  return api.get("/doctor/me");
};

export const fetchDoctorByDepartmentIdService = (departmentId) => {
  return api.get(`/doctor/${departmentId}`);
};

export const createDoctorProfileService = (payload) => {
  return api.post("/doctor/profile", payload);
};

export const updateDoctorProfileService = (payload) => {
  return api.put("/doctor/profile", payload);
};
