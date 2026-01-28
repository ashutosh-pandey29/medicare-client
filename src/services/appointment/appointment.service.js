import api from "../../api/axios";

export const fetchAllAppointmentService = () => {
  return api.get("/appointment/get");
};

export const fetchAppointmentByIdService = (appointmentId) => {
  return api.get(`/appointment/get/${appointmentId}`);
};

export const upcomingAppointmentService = () => {
  return api.get(`/appointment/upcoming`);
};

export const newAppointmentService = (payload) => {
  return api.post("/appointment/new", payload);
};

export const updateAppointmentService = (payload) => {
  return api.put("/appointment/update", payload);
};

export const cancelAppointmentService = (appointmentId) => {
  return api.put(`/appointment/cancel/${appointmentId}`);
};

export const deleteAppointmentService = (appointmentId) => {
  return api.delete(`/appointment/delete/${appointmentId}`);
};

export const fetchAppointmentForDoctorService = () => {
  return api.get("/appointment/doctor");
};

export const fetchPatientForConsultationService = () => {
  return api.get("/appointment/consultant");
};
