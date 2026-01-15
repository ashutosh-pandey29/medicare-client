import api from "../../api/axios";

export const fetchAllDepartmentService = async () => {
  return await api.get("/department/all");
};

export const fetchDepartmentByIdService = async (id) => {
  return await api.get(`/department/${id}`);
};

export const createDepartmentService = async (payload) => {
  return await api.post("/department/new", payload);
};

export const updateDepartmentService = async (payload, id) => {
  return await api.put(`/department/update/${id}`, payload);
};

export const deleteDepartmentService = async (id) => {
  return await api.delete(`/department/delete/${id}`);
};

export const forceDeleteDepartmentService = async (id) => {
  return await api.delete(`/department/delete/${id}?force=true`)
};
