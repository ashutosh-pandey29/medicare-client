import { useState } from "react";
import {
  createDoctorProfileService,
  fetchDoctorProfileService,
  updateDoctorProfileService,
} from "../../services/doctor/profile.service";
import { toast } from "react-toastify";

export const useProfile = () => {
  const [loading, setLoading] = useState(false);

  /**==================== FETCH DOCTOR PROFILE===================== */
  const fetchProfile = async (setErrors) => {
    setLoading(true);
    try {
      const response = await fetchDoctorProfileService();

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

  /**===================CREATE PROFILE ================ */

  const createProfile = async (payload, setErrors) => {
    try {
      setLoading(true);
      const response = await createDoctorProfileService(payload);


      if (!response?.success) {
        toast.error(response?.message || "Profile creation failed");
        return null;
      }

      toast.success(response?.message || "Profile created successfully");
      return response;
    } catch (err) {
      errorHandler(err, setErrors);
    } finally {
      setLoading(false);
    }
  };


  /**================ UPDATE PROFILE=============== */

  const updateProfile = async (payload, setErrors) => {
      try {
      setLoading(true);
      const response = await updateDoctorProfileService(payload);
      if (!response?.success) {
        toast.error(response?.message || "Profile updating failed");
        return null;
      }

      toast.success(response?.message || "Profile updating successfully");
      return response;
    } catch (err) {
      errorHandler(err, setErrors);
    } finally {
      setLoading(false);
    }


  }


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

    toast.error(err.message);
  };

  return { loading, fetchProfile, createProfile  , updateProfile};
};
