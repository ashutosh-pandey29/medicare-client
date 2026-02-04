import { useState } from "react";
import {
  fetchDoctorByIdService,
  fetchDoctorService,
  rollbackDoctorService,
  verifyDoctorProfileService,
} from "../../services/admin/doctor.service";
import { toast } from "react-toastify";

export const useDoctor = () => {
  const [loading, setLoading] = useState(false);

  const fetchDoctor = async () => {
    setLoading(true);

    try {
      const response = await fetchDoctorService();

      if (!response.success) {
        throw new Error(response.message || "data not found");
      }

      return response;
    } catch (err) {
      // toast.error(err.message || "something went wrong.");

      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctorById = async (profileId) => {
    setLoading(true);

    try {
      const response = await fetchDoctorByIdService(profileId);
      if (!response.success) {
        throw new Error(response.message || "data not found");
      }

      return response;
    } catch (err) {
      toast.error(err.message || "something went wrong.");

      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const verifyDoctorProfile = async (profileId) => {
    setLoading(true);
    try {
      const response = await verifyDoctorProfileService(profileId);
      if (!response.success) {
        throw new Error(response.message || "profile  not verified");
      }

      return response;
    } catch (err) {
      toast.error(err.message || "something went wrong.");

      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const rollbackDoctor = async (profileId) => {
    setLoading(true);

    try {
      const response = await rollbackDoctorService(profileId);
      if (!response.success) {
        throw new Error(response.message || "rollback not implemented");
      }

      return response;
    } catch (err) {
      toast.error(err.message || "something went wrong.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  /**==========Error handler  */

  return { fetchDoctor, fetchDoctorById, verifyDoctorProfile, loading, rollbackDoctor };
};
