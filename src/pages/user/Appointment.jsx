import { useState } from "react";
import { LuCalendarSync } from "react-icons/lu";
import { FaEye } from "react-icons/fa6";
import appointmentJSON from "../../assets/jsonData/appointment.json";
import { InfoCard } from "../../components/common/dashboard/card/InfoCard";
import { useModal } from "../../context/ModalContext";
import { ViewAppointmentDetailsModel } from "../../components/model/ViewAppointmentDetailsModel";
import { NewAppointmentModel } from "../../components/model/NewAppointmentModel";
export const Appointment = () => {
  const { openModal } = useModal();

  return (
    <>
      <section className="bg-white rounded-sm shadow p-1  md:p-3  w-full h-auto">
        {/* heading  */}

        <div className="p-3 flex flex-col sm:flex-row md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Your Appointments</h2>

          {/* Button */}
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-center text-sm sm:text-base md:text-base"
            onClick={() => openModal(<NewAppointmentModel />)}
          >
            New Appointment
          </button>
        </div>

        <div className="grid grid-cols-1  gap-3">
          {/* render appointment card */}

          {appointmentJSON.map((appointment, index) => {
            return (
              <InfoCard
                key={appointment.id || index}
                title={`Appointment with ${appointment.doctorName}`}
                subText={`${appointment.message} on ${appointment.date}`}
                status={`${appointment.status}`}
                buttons={[
                  {
                    text: "",
                    icon: <FaEye />,
                    color: "blue",
                    onClick: () => openModal(<ViewAppointmentDetailsModel data={appointment} />),
                  },
                  {
                    text: "",
                    icon: <LuCalendarSync />,
                    color: "orange",
                    onClick: () => console.log("Reschedule appointment", appointment),
                  },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
