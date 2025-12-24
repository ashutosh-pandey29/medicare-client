import { CgUser } from "react-icons/cg";
import WelcomeCard from "../../components/common/dashboard/card/WelcomeCard";
import { useNavigate } from "react-router-dom";
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
      <section className="h-auto">
        {/* welcome card  */}

        <div>
          <WelcomeCard />
        </div>
        {/* 5 patient appointment table */}

        <div className="max-w-screen overflow-auto  md:p-0">
          <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50  mt-5 p-1 md:p-0">
            <div className="max-w-7xl mx-auto ">
              <div className="bg-white rounded shadow overflow-hidden">
                {/* Header */}
                <div
                  className="bg-linear-to-r from-[#059669] to-[#3ad28b] md:px-6  md:py-2 px-2"
                >
                  <div className="flex items-center  justify-between  ">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white flex  items-center gap-2">
                        <CgUser className="" />
                        Top 5 Patients
                      </h2>
                      <p className="text-cyan-50 text-sm mt-1">Today's upcoming appointments</p>
                    </div>

                    <button
                      onClick={() => navigate("patient-queue")}
                      className=" bg-white text-cyan-600 md:px-6 md:py-2.5  px-1 py-1 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-md flex items-center gap-2"
                    >
                      View All
                    </button>
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

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Showing <span className="font-semibold text-cyan-600">5</span> of{" "}
                    <span className="font-semibold text-cyan-600">28</span> patients scheduled for
                    today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </section>
    </>
  );
};
