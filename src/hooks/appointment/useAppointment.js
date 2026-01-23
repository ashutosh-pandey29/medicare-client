import { useState } from "react";
import { fetchAllAppointmentService, fetchAppointmentByIdService, newAppointmentService } from "../../services/appointment/appointment.service";

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

  const newAppointment = async (payload) => {
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
  const updateAppointment = (payload) => {
    setLoading(true);
    try {
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  //! cancel APPOINTMENT
  const cancelAppointment = async () => {
    setLoading(true);
    try {
         const response = await newAppointmentService(payload);
      if (!response.success) {
        throw new Error(response.message || "appointment Not booked");
      }
      return response;
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { loading, newAppointment, fetchAllAppointment, fetchAppointmentById };
};
