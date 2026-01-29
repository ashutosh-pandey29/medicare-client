import {
  FaBell,
  FaCalendarAlt,
  FaFileMedical,
  FaRegCalendarAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { MiniCard } from "../../components/common/dashboard/card/MiniCard";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { Button } from "../../components/UI/Button";
import { NewAppointmentModelForm } from "../../components/modals/NewAppointmentModelForm";
import { Modal } from "../../components/modals/Modal";
import { useModal } from "../../hooks/custom/useModal";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { useEffect, useState } from "react";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { useAppointment } from "../../hooks/appointment/useAppointment";

export const DashboardHome = ({ appointment }) => {
  const { decodedUser } = useJwtDecode();
  const { modalData, openModal, closeModal } = useModal();
  const [upcomingAppointment, setUpComingAppointment] = useState([]);

  const { fetchUpcomingAppointment } = useAppointment();

  useEffect(() => {
    const getUpcomingAppointment = async () => {
      const response = await fetchUpcomingAppointment();
      if (response.success) {
        setUpComingAppointment(response.data);
      }
    };
    getUpcomingAppointment();
  }, []);

  return (
    <section className=" w-full h-auto bg-white">
      {/* ================= PAGE HEADER ================= */}

      <div className="p-1 md:p-3 flex flex-col sm:flex-row items-center justify-between  gap-3 w-full md:w-full">
        {/* heading  */}
        <UserPageHeading
          title={`Hello ${decodedUser?.username}`}
          subText="Book appointments, view history, track payments, and access your medical reports — all in one place.
"
          icon={<FaUser />}
          button={
            <>
              <Button
                label={"schedule Appointment"}
                onClick={() => openModal(<NewAppointmentModelForm />, "New Appointment")}
                customCss={"hidden md:block"}
              />

              <Button
                label={<FaCalendarAlt className="text-xl" />}
                onClick={() => openModal(<NewAppointmentModelForm />, "New Appointment")}
                customCss={"block md:hidden"}
              />
            </>
          }
        />
      </div>

      {/* ================= QUICK CARD APPOINTMENT HERO ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-0 md:mt-10 p-1 md:p-5">
        {" "}
        <MiniCard title="UpComing Appointment" subText={"10"} icon={<FaRegCalendarAlt />} />{" "}
        <MiniCard title="Total Appointments" subText={"10"} icon={<FaCalendarAlt />} />{" "}
        <MiniCard title="Reports" subText={"10"} icon={<FaFileMedical />} />{" "}
        <MiniCard title="Payments" subText={"₹14,500"} icon={<FaWallet />} />{" "}
      </div>

      {/* ================= UPCOMING APPOINTMENT HERO ================= */}

      <div className="flex justify-center mt-5 md:p-5 p-1">
        <div className="max-w-7xl w-full md:p-0  border rounded border-zinc-100">
          <div className="bg-white rounded overflow-hidden">
            {/* Header */}

            <div className=" bg-[#2563EB] p-2 md:p-6 text-white flex items-center gap-4 rounded-t">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Upcoming</p>
                <h2 className="text-base md:text-2xl font-bold ">Your Upcoming Appointment</h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2  h-120 overflow-y-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-1 ">
                {/* card row */}

                {upcomingAppointment.length === 0 ? (
                  <NoDataFound message="No upcoming appointments scheduled." />
                ) : (
                  upcomingAppointment.map((apt) => (
                    <div className="w-full mt-1.5 ">
                      <CardRow
                        status={"upcoming"}
                        title="Upcoming Appointment "
                        message={`Your Appointment is scheduled for ${new Date(
                          apt.appointmentDate
                        ).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}`}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal data={modalData} onClose={closeModal} />
    </section>
  );
};
