import {
  FaBell,
  FaCalendarAlt,
  FaCalendarCheck,
  FaClock,
  FaFileMedical,
  FaRegCalendarAlt,
  FaTimesCircle,
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
import { IoMdAnalytics } from "react-icons/io";

export const DashboardHome = ({ appointment }) => {
  const { decodedUser } = useJwtDecode();
  const { modalData, openModal, closeModal } = useModal();
  const [upcomingAppointment, setUpComingAppointment] = useState([]);
  const [stats, setStats] = useState([]);

  const { fetchUpcomingAppointment, fetchAppointmentStats } = useAppointment();

  useEffect(() => {
    const getUpcomingAppointment = async () => {
      const response = await fetchUpcomingAppointment();
      if (response.success) {
        setUpComingAppointment(response.data);
      }
    };
    getUpcomingAppointment();
  }, []);

  // stats

  useEffect(() => {
    const status = async () => {
      const response = await fetchAppointmentStats();
      if (response.success) {
        setStats(response.data);
      }
    };
    status();
  }, []);

  return (
    <section className=" w-full h-screen bg-white">
      <div className="p-1 md:p-3 flex flex-col sm:flex-row items-center justify-between  gap-3 w-full md:w-full border-b border-amber-100">
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
                onClick={() =>
                  openModal(
                    <NewAppointmentModelForm mode="create" onClose={closeModal} />,
                    "New Appointment"
                  )
                }
                customCss={"hidden lg:block"}
              />

              <Button
                label={<FaCalendarAlt className="text-xl" />}
                onClick={() =>
                  openModal(
                    <NewAppointmentModelForm mode="create" onClose={closeModal} />,
                    "New Appointment"
                  )
                }
                customCss={"block lg:hidden"}
              />
            </>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-0.5 md:p-3 gap-4 mt-5">
        {/* ================= UPCOMING APPOINTMENTS ================= */}
        <div className="w-full border rounded-2xl border-zinc-100 bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-[#2563EB] p-3 md:p-6 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <FaCalendarAlt className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Upcoming</p>
              <h2 className="text-base md:text-2xl font-bold">Your Upcoming Appointment</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-2 max-h-[360px] overflow-y-auto">
            {upcomingAppointment.length === 0 ? (
              <NoDataFound message="No upcoming appointments scheduled." />
            ) : (
              upcomingAppointment.map((apt) => (
                <div key={apt._id} className="w-full mt-2 border border-zinc-100 rounded-lg">
                  <CardRow
                    status="upcoming"
                    title="Upcoming Appointment"
                    message={`Your appointment is scheduled for ${new Date(
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

        {/* ================= STATS ================= */}
        <div className="w-full border rounded-2xl border-zinc-100 bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-[#2563EB] p-3 md:p-6 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <IoMdAnalytics className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Overview</p>
              <h2 className="text-base md:text-2xl font-bold">Your Stats</h2>
            </div>
          </div>

          {/* Stats Row */}
          <div className="space-y-2.5 p-1.5">
            <div className="p-4 bg-zinc-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaCalendarCheck className="text-indigo-600" />
                </div>
                <p className="text-sm font-medium text-zinc-600">Total Appointments</p>
              </div>
              <p className="text-2xl font-bold text-zinc-800">0{stats.total}</p>
            </div>

            <div className=" p-4 bg-zinc-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaClock className="text-blue-600" />
                </div>
                <p className="text-sm font-medium text-zinc-600">Upcoming</p>
              </div>
              <p className="text-2xl font-bold text-blue-600">0{stats.upcoming}</p>
            </div>

            <div className="p-4 bg-zinc-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <FaTimesCircle className="text-red-500" />
                </div>
                <p className="text-sm font-medium text-zinc-600">Cancelled</p>
              </div>
              <p className="text-2xl font-bold text-red-500">0{stats.cancelled}</p>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal data={modalData} onClose={closeModal} />
    </section>
  );
};
