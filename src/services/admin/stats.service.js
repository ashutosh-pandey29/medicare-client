import api from "../../api/axios";

export const getStatsForAdminService = () => {
  return api.get("/stats/get");
};

export const getRevenueGraphDataService = () => {
  return api.get("/stats/revenue");
};

export const getPatientGraphService = () => {
 return  api.get("/stats/patient");
};
