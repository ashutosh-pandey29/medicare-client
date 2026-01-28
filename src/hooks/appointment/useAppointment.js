import { useState } from "react";
import {
  cancelAppointmentService,
  deleteAppointmentService,
  fetchAllAppointmentService,
  fetchAppointmentByIdService,
  fetchAppointmentForDoctorService,
  newAppointmentService,
  updateAppointmentService,
  fetchPatientForConsultationService,
} from "../../services/appointment/appointment.service";
import { toast } from "react-toastify";

export const useAppointment = () => {
  const [loading, setLoading] = useState(false);

  //! FETCH ALL APPOINTMENT
  //! It will retrieve all the appointments(with basic info  ), both past and present, for the logged-in user.

  const fetchAllAppointment = async () => {
    setLoading(true);
    try {
      const response = await fetchAllAppointmentService();

      // console.log(response);

      if (!response?.success) {
        console.error(response);
        setErrors(response?.message || "Unable to fetch appointment");
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

  //! FETCH APPOINTMENT BY ID
  //!  return the full details of the appointment.
  const fetchAppointmentById = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await fetchAppointmentByIdService(appointmentId);

      // console.log(response);

      if (!response?.success) {
        console.error(response);
        setErrors(response?.message || "Unable to fetch appointment");
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

  //! FETCH APPOINTMENT OF USER

  //! FETCH UPCOMING APPOINTMENT
  const upcomingAppointment = () => {
    setLoading(true);
    try {
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  //! NEW APPOINTMENT (BOOK NEW APPOINTMENT)

  const newAppointment = async (payload, setErrors) => {
    setLoading(true);
    try {
      const response = await newAppointmentService(payload);
      if (!response.success) {
        throw new Error(response.message || "appointment Not booked");
      }
      return response;
    } catch (err) {
      errorHandler(err, setErrors);
    } finally {
      setLoading(false);
    }
  };

  //! UPDATE APPOINTMENT (STATUS  ,  AND APPOINTMENT INFO )
  const updateAppointment = async (payload) => {
    setLoading(true);
    try {
      const response = await updateAppointmentService(payload);

      if (!response.success) {
        throw new Error(response.message || "Unable to update appointment status");
      }

      return response;
    } catch (err) {
      // console.error(err);
      toast.error(err.message || "Status update failed");
    } finally {
      setLoading(false);
    }
  };

  //! cancel APPOINTMENT
  const cancelAppointment = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await cancelAppointmentService(appointmentId);
      if (!response.success) {
        throw new Error(response.message || "appointment Not cancelled");
      }
      return response;
    } catch (err) {
      console.log(err);
      toast.error(err.message || "appointment not cancelled");
    } finally {
      setLoading(false);
    }
  };

  // delete appointment

  const deleteAppointment = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await deleteAppointmentService(appointmentId);
      if (!response.success) {
        throw new Error(response.message || "appointment Not deleted");
      }
      return response;
    } catch (err) {
      console.log(err);
      toast.error(err.message || "appointment not deleted");
    } finally {
      setLoading(false);
    }
  };

  // fetch appointment for doctor

  const fetchAppointmentForDoctor = async () => {
    setLoading(true);
    try {
      const response = await fetchAppointmentForDoctorService();

      if (!response?.success) {
        throw new Error(response.message || "Appointment not fetched");
      }
      return response;
    } catch (err) {
      toast.error(err?.message || "Appointment not fetched");
    } finally {
      setLoading(false);
    }
  };


  const fetchPatientForConsultation = async ()=>{
     setLoading(true);
    try {
      const response = await fetchPatientForConsultationService();

      if (!response?.success) {
        throw new Error(response.message || "patient not fetched");
      }
      return response;
    } catch (err) {
      toast.error(err?.message || "patient not fetched");
    } finally {
      setLoading(false);
    }
  }

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

  return {
    loading,
    newAppointment,
    fetchAllAppointment,
    fetchAppointmentById,
    cancelAppointment,
    deleteAppointment,
    fetchAppointmentForDoctor,
    updateAppointment,
    fetchPatientForConsultation,
  };
};
