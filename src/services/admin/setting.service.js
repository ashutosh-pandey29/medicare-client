import api from "../../api/axios";

export const updateMaintenance = (payload) => {
  return api.patch("settings/maintenance-mode", payload);
};

export const fetchStatus = () => {
  return api.get("/settings/maintenance-mode");
};

export const backupDBservice = () => {
  return api.get("/settings/backup-db" , {responseType:"blob"});
};
