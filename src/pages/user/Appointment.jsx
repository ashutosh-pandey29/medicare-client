import { useEffect, useState } from "react";
import { LuCalendarSync } from "react-icons/lu";
import { FaEye } from "react-icons/fa6";
import { InfoCard } from "../../components/common/dashboard/card/InfoCard";
import { Modal } from "../../components/modals/Modal";
import { NewAppointmentModelForm } from "../../components/modals/NewAppointmentModelForm";
import { useModal } from "../../hooks/custom/useModal";
import { ViewAppointmentDetailsModel } from "../../components/modals/ViewAppointmentDetailsModel";
import { UpdateAppointmentModelForm } from "../../components/modals/UpdateAppointmentModalForm";
import { useFetch } from "../../hooks/custom/useFetch";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { PreLoader } from "../../components/UI/loaders/PreLoader";
import { NoDataFound } from "../../components/basic/DataNotFound";
export const Appointment = () => {
  const { modalData, openModal, closeModal } = useModal();
  const [appointmentData, setAppointmentData] = useState([]);
  const { decodedUser } = useJwtDecode();
 
  const userId = decodedUser?.userId;

  const { data, error, loading } = useFetch(
    userId ? `${import.meta.env.VITE_API_URL}/appointment/get/${userId}` : null
  );

  // update state only when data changes
  useEffect(() => {
    if (data?.data) {
      setAppointmentData(data.data);
    }
  }, [data]);

  const formatDate = (iso) => {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case "waiting":
        return "Your appointment request is received and currently in waiting. You will be notified once approved.";
      case "confirmed":
        return "Your appointment is confirmed. Please arrive on time.";
      case "pending":
        return "Payment pending. Please complete payment to confirm your appointment.";
      case "completed":
        return "Your appointment is completed. Thank you for visiting.";
      case "cancelled":
        return "Your appointment has been cancelled.";
      case "rescheduled":
        return "Your appointment has been rescheduled. Please check updated date and time.";
      default:
        return "Appointment update available.";
    }
  };

  // set pre-loader

  {
    loading && <PreLoader />;
  }

  return (
    <>
      <section className="bg-white rounded-sm  p-1  md:p-3  w-full h-auto">
        {/* heading  */}

        <div className="p-3 flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-b-zinc-100">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">Your Appointments</h2>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Search + Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Search */}
              <input
                type="text"
                className="border border-zinc-300 w-full sm:w-60 h-[45px] rounded-md outline-none px-3 text-sm focus:ring-2 focus:ring-green-300 transition"
                placeholder="Search appointment..."
              />

              {/* Filter */}
              <select className="border border-zinc-300 w-full sm:w-40 h-[45px] text-sm px-2 rounded-md outline-none focus:ring-2 focus:ring-green-300 transition">
                <option value="">All Status</option>
                <option value="waiting">Waiting</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Add New Button */}
            <button
              className="bg-green-500 hover:bg-green-600 transition h-[45px] w-full sm:w-auto text-white px-5 py-2 rounded-md text-sm sm:text-base font-medium shadow-sm"
              onClick={() => openModal(<NewAppointmentModelForm />, "New Appointment")}
            >
              + New Appointment
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-3">
          {/* render appointment card */}

          {appointmentData.length > 0 ? (
            appointmentData?.map((appointment, index) => {
              return (
                <InfoCard
                  key={appointment._id || index}
                  title={
                    appointment.doctorId?.doctorName
                      ? `Your appointment with Dr. ${
                          appointment.doctorId.doctorName
                        } on ${formatDate(appointment.appointmentDate)}`
                      : `Your appointment is scheduled on ${formatDate(
                          appointment.appointmentDate
                        )}`
                  }
                  subText={getStatusMessage(appointment.status)}
                  status={appointment.status}
                  buttons={[
                    {
                      text: "",
                      icon: <FaEye />,
                      color: "blue",
                      onClick: () => {
                        openModal(
                          <ViewAppointmentDetailsModel data={appointment} />,
                          "Appointment Detail"
                        );
                      },
                    },
                    {
                      text: "",
                      icon: <LuCalendarSync />,
                      color: "orange",
                      onClick: () => {
                        openModal(<UpdateAppointmentModelForm />, "Update Appointment");
                      },
                    },
                  ]}
                />
              );
            })
          ) : (
            <NoDataFound message="No appointments available" />
          )}
        </div>

        {/* modal  */}
        <Modal data={modalData} onClose={closeModal} />
      </section>
    </>
  );
};
