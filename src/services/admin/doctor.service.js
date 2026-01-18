import api from "../../api/axios";

export const fetchDoctorService = () => {
  return api.get("/admin/doctors");
};

export const fetchDoctorByIdService = (profileId) => {
  return api.get(`/admin/doctors/${profileId}`);
};

export const verifyDoctorProfileService = (profileId) => {
  return api.patch(`/admin/doctor/${profileId}/verify`);
};
