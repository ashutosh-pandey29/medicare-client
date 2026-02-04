import api from "../../api/axios";

export const getStatsForAdminService = () => {
  api.get("/stats/get");
};

export const getRevenueGraphService = () => {
  api.get("/stats/revenue");
};

export const getPatientGraphService = () => {
  api.get("/stats/patient");
};
