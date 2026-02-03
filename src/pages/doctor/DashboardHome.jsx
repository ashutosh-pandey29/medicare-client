import { CgUser } from "react-icons/cg";
import WelcomeCard from "../../components/common/dashboard/card/WelcomeCard";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaUserGroup } from "react-icons/fa6";
import { Button } from "../../components/UI/Button";
import { MiniCard } from "../../components/common/dashboard/card/MiniCard";
import {
  FaCalendarCheck,
  FaHashtag,
  FaHospitalUser,
  FaUserCheck,
  FaUserClock,
} from "react-icons/fa6";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { PatientConsultation } from "./PatientConsultation";
import { useAppointment } from "../../hooks/appointment/useAppointment";
import { useEffect, useState } from "react";
import { ApproveAppointment } from "./ApproveAppointment";
// import { useSocket } from "../../context/SocketContext";
// import { useState, useEffect } from "react";

export const DashboardHome = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState([]);
  const { fetchUpcomingAppointment, fetchAppointmentStats } = useAppointment();
  useEffect(() => {
    const status = async () => {
      const response = await fetchAppointmentStats();
      if (response.success) {
        setStats(response.data);
      }
    };
    status();
  }, []);

  const patients = [
    {
      id: 1,
      name: "Rahul Sharma",
      appointmentDate: "24 Dec 2024",
      tokenNumber: "T-001",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Priya Patel",
      appointmentDate: "24 Dec 2024",
      tokenNumber: "T-002",
      time: "10:30 AM",
    },
    {
      id: 3,
      name: "Amit Kumar",
      appointmentDate: "24 Dec 2024",
      tokenNumber: "T-003",
      time: "11:00 AM",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      appointmentDate: "24 Dec 2024",
      tokenNumber: "T-004",
      time: "11:30 AM",
    },
    {
      id: 5,
      name: "Vikram Singh",
      appointmentDate: "24 Dec 2024",
      tokenNumber: "T-005",
      time: "12:00 PM",
    },
  ];

  return (
    <>
      {/* welcome card  */}
      <div>
        <WelcomeCard />
      </div>

      <section className="max-w-7xl mx-auto   p-1 mt-5  ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 mt-3">
          <MiniCard
            title="Today Appointment"
            icon={<FaUserCheck className="text-emerald-600" size={22} />}
            subText={`0${stats.todayTotal}`}
          />

          <MiniCard
            title="Completed Today"
            icon={<FaUserCheck className="text-emerald-600" size={22} />}
            subText={`0${stats.todayCompleted}`}
          />

          <MiniCard
            title="Upcoming  Appointment"
            icon={<FaUserGroup className="text-green-600" size={22} />}
            subText={`0${stats.upcoming}`}
          />

          <MiniCard
            title="Completed Appointment"
            icon={<FaUserClock className="text-yellow-500" size={22} />}
            subText={`0${stats.completed}`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-5">
          <div className=" overflow-auto shadow-xs  md:p-0">
            <div className=" bg-linear-to-br from-blue-50 to-cyan-50   p-1 md:p-0">
              <div className="max-w-7xl mx-auto ">
                <div className="bg-white rounded shadow overflow-hidden">
                  {/* Header */}
                  <div className="bg-linear-to-r from-[#059669] to-[#3ad28b] md:px-6  md:py-2 px-2">
                    <div className="flex items-center  justify-between  ">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white flex  items-center gap-2">
                          <FaUserCheck className="" />
                          Approve Appointments
                        </h2>
                        <p className="text-cyan-50 text-sm mt-1">new appointments request</p>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-y-auto  h-[60vh] p-2">
                    <ApproveAppointment />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*stats */}
          <div className="bg-white rounded shadow-xs h-fit">
            <div className="bg-linear-to-r rounded-t from-[#059669] to-[#3ad28b]  md:px-2  md:py-2 px-2">
              <h2 className="text-xl md:text-2xl font-bold text-white flex  items-center gap-2 p-3">
                <FaChartLine className="w-6 h-6 text-white" />
                Professional Stats
              </h2>
            </div>

            <div className="space-y-4 p-2">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-600">Total Appointment</span>
                <span className="text-2xl font-bold text-blue-600">0{stats.total}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-600">Weekly Total</span>
                <span className="text-2xl font-bold text-purple-600">0{stats.weeklyTotal} </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-gray-600">Weekly Completed</span>
                <span className="text-2xl font-bold text-green-600">0{stats.weeklyCompleted}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
