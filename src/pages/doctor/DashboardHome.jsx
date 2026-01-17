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
// import { useSocket } from "../../context/SocketContext";
// import { useState, useEffect } from "react";

export const DashboardHome = () => {
  const navigate = useNavigate();
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
      <section className="max-w-7xl mx-auto   ">
        {/* welcome card  */}
        <div>
          <WelcomeCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 mt-3 bg-white p-5">
          <MiniCard
            title="Total Patient"
            icon={<FaUserGroup className="text-green-600" size={22} />}
            subText="18"
          />

          <MiniCard
            title="Completed Appointment"
            icon={<FaUserClock className="text-yellow-500" size={22} />}
            subText="5"
          />

          <MiniCard
            title="Completed Today"
            icon={<FaUserCheck className="text-emerald-600" size={22} />}
            subText="13"
          />

          <MiniCard
            title="Today Appointment"
            icon={<FaUserCheck className="text-emerald-600" size={22} />}
            subText="13"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-5">
          {/* 5 patient appointment table */}
          <div className=" overflow-auto shadow-xs  md:p-0">
            <div className=" bg-linear-to-br from-blue-50 to-cyan-50   p-1 md:p-0">
              <div className="max-w-7xl mx-auto ">
                <div className="bg-white rounded shadow overflow-hidden">
                  {/* Header */}
                  <div className="bg-linear-to-r from-[#059669] to-[#3ad28b] md:px-6  md:py-2 px-2">
                    <div className="flex items-center  justify-between  ">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white flex  items-center gap-2">
                          <CgUser className="" />
                          Top 5 Patients
                        </h2>
                        <p className="text-cyan-50 text-sm mt-1">Today's upcoming appointments</p>
                      </div>

                      <Button label={"View All "} variant="light" />
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div className="flex items-center gap-2">Token</div>
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div className="flex items-center gap-2">Patient Name</div>
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div className="flex items-center gap-2">Appointment Date</div>
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {patients.map((patient, index) => (
                          <tr key={patient.id} className="hover:bg-blue-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-cyan-100 text-cyan-700">
                                {patient.tokenNumber}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">
                                    {patient.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Patient ID: P-{1000 + patient.id}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 font-medium">
                                {patient.appointmentDate}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-600 font-medium">
                                {patient.time}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*stats */}
          <div className="bg-white rounded shadow-xs">
            <div className="bg-linear-to-r rounded-t from-[#059669] to-[#3ad28b]  md:px-2  md:py-2 px-2">
              <h2 className="text-xl md:text-2xl font-bold text-white flex  items-center gap-2 p-3">
                <FaChartLine className="w-6 h-6 text-white" />
                Professional Stats Of This Week
              </h2>
            </div>

            <div className="space-y-4 p-2">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-600">Total Appointment</span>
                <span className="text-2xl font-bold text-blue-600">2,547</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-600">Treated Patient</span>
                <span className="text-2xl font-bold text-purple-600">15 </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-gray-600">Success Rate</span>
                <span className="text-2xl font-bold text-green-600">98.5%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
