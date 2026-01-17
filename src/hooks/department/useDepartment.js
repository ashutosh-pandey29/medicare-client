import { useEffect, useState } from "react";
import {
  createDepartmentService,
  deleteDepartmentService,
  fetchAllDepartmentService,
  fetchDepartmentByIdService,
  fetchPublicDepartmentService,
  forceDeleteDepartmentService,
  updateDepartmentService,
} from "../../services/department/department.service.js";
import { toast } from "react-toastify";

export const useDepartment = () => {
  const [loading, setLoading] = useState();

  /**=====================FETCH PUBLIC DEPARTMENT -  FRO DROPDOWN========== */

  const fetchPublicDepartment = async (setErrors) => {
    try {
      setLoading(true);
      const response = await fetchPublicDepartmentService();

      // console.log(response);

      if (!response?.success) {
        console.error(response);
        setErrors(response?.message || "Unable to fetch departments");
        return;
      }

      return response;
    } catch (err) {
      console.error(err);
      setErrors(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /**===================FETCH DEPARTMENT============================== */

  const fetchDepartment = async (setErrors) => {
    try {
      setLoading(true);
      const response = await fetchAllDepartmentService();

      // console.log(response);

      if (!response?.success) {
        console.error(response);
        setErrors(response?.message || "Unable to fetch departments");
        return;
      }

      return response;
    } catch (err) {
      console.error(err);
      setErrors(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /**===================FETCH DEPARTMENT============================== */

  const fetchDepartmentById = async (id) => {
    try {
      setLoading(true);
      const response = await fetchDepartmentByIdService(id);

      // console.log(response);

      if (!response?.success) {
        console.error(response);
        setErrors(response?.message || "Unable to fetch departments");
        return;
      }

      return response;
    } catch (err) {
      console.error(err);
      setErrors(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /**===================CREATE DEPARTMENT============================ */

  const createDepartment = async (payload, setErrors) => {
    try {
      setLoading(true);
      const response = await createDepartmentService(payload);
      if (!response.success) {
        throw new Error(response.message || "department Not Created");
      }
      return response;
    } catch (err) {
      errorHandler(err, setErrors);
    } finally {
      setLoading(false);
    }
  };

  /**==================== update department */
  const updateDepartment = async (payload, id, setErrors) => {
    try {
      setLoading(true);

      const response = await updateDepartmentService(payload, id);

      if (!response.success) {
        throw new Error(response.message || "Department not updated");
      }

      return response;
    } catch (err) {
      errorHandler(err, setErrors);
      if (err.message) toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**==================== DELETE DEPARTMENT=============================== */

  const deleteDepartment = async (departmentId) => {
    try {
      setLoading(true);
      const response = await deleteDepartmentService(departmentId);
      if (!response.success) {
        throw new Error(response?.message || "Failed to delete department");
      }

      toast.success(response.message || "Department deleted successfully");
      return response;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Department cannot be deleted";
      toast.error(errorMessage);
      console.error("Delete Department Error:", err);
    } finally {
      setLoading(false);
    }
  };

  /**=================== FORCE DELETE==================================== */
  const forceDeleteDepartment = async (departmentId) => {
    try {
      setLoading(true);
      const response = await forceDeleteDepartmentService(departmentId);
      if (!response.success) {
        throw new Error(response?.message || "Failed to delete department");
      }

      toast.success(response.message || "Department deleted successfully......");
      return response;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Department cannot be deleted";
      toast.error(errorMessage);
      console.error("Delete Department Error:", err);
    } finally {
      setLoading(false);
    }
  };

  /**================HANDLE ERROR================== */

  const errorHandler = (err, setErrors) => {
    if (err.errors && setErrors) {
      const formattedErrors = {};

      err.errors.forEach((e) => {
        if (formattedErrors[e.field]) {
          formattedErrors[e.field] += `, ${e.message}`;
        } else {
          formattedErrors[e.field] = e.message;
        }
      });
      setErrors(formattedErrors);
    }
  };

  return {
    loading,
    fetchDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    forceDeleteDepartment,
    fetchPublicDepartment,
  };
};
