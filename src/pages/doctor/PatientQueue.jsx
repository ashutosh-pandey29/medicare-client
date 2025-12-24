import { FaAnglesRight, FaAnglesLeft, FaUser, FaCalendar, FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToken } from "../../hooks/custom/useToken";
import { FiActivity, FiFileText } from "react-icons/fi";
import { toast } from "react-toastify";

export const PatientQueue = () => {
  const token = useToken();
  const [patients, setPatients] = useState([]);

  // Fetch patient queue on mount
  useEffect(() => {
    const fetchPatientQueue = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/get/patient-queue`, {
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });

        const jsonResponse = await response.json();

        // mark first patient as active
        const patientsWithActive = jsonResponse.data.map((p, i) => ({
          ...p,
          active: i === 0,
        }));

        setPatients(patientsWithActive);
      } catch (error) {
        console.error("Error fetching patient queue:", error);
      }
    };

    fetchPatientQueue();
  }, [token]);

  // Move active patient to given index
  const handleActivePatient = (index) => {
    setPatients((prev) =>
      prev.map((p, i) => ({
        ...p,
        active: i === index,
      }))
    );
  };

  // // Move to previous patient
  // const handlePrev = () => {
  //   const currentIndex = patients.findIndex((p) => p.active);
  //   if (currentIndex > 0) {
  //     handleActivePatient(currentIndex - 1);
  //   }
  // };

  // Move to next patient
  const handleNext = async () => {
    const currentIndex = patients.findIndex((p) => p.active);
    if (currentIndex === -1) return;

    const currentPatient = patients[currentIndex];

    // console.log("cp", currentPatient);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/appointment/update-status/${currentPatient.appointmentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : null,
          },
          body: JSON.stringify({ status: "completed" }),
        }
      );

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error();
      }

      if (jsonResponse.status) {
        toast.success(jsonResponse.message || "Appointment marked as completed");

        setPatients((prev) => {
          const filtered = prev.filter(
            (item) => item.appointmentId !== currentPatient.appointmentId
          );

          const nextIndex = Math.min(currentIndex, filtered.length + 1);

          return filtered.map((p, i) => ({
            ...p,
            active: i === nextIndex,
          }));
        });

        // handleActivePatient(currentIndex + 1);
      } else {
        toast.success(jsonResponse.message || "Appointment not  marked as completed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Server error. Please try again in a moment.");
    }
  };

  // Get currently active patient for details section
  const activePatient = patients.find((p) => p.active);

  return (
    <section className="max-w-7xl mx-auto sm:px-4  overflow-x-hidden">
      {/* header */}

      <div
        className="relative w-full max-w-full rounded overflow-hidden shadow z-10"
        style={{
          background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
        }}
      >
        {/* Decorative medical cross patterns */}
        <div className="absolute top-4 right-8 w-16 h-16 opacity-10">
          <div className="absolute w-4 h-16 bg-white left-6"></div>
          <div className="absolute w-16 h-4 bg-white top-6"></div>
        </div>
        <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10">
          <div className="absolute w-3 h-12 bg-white left-4.5"></div>
          <div className="absolute w-12 h-3 bg-white top-4.5"></div>
        </div>

        {/* Pulse line decoration */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-50" viewBox="0 0 1000 200">
          <path
            d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1 md:ml-6">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">
                    Today's Appointment Queue
                  </h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  Monitor active patients, review their details, and manage appointments
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-0 mt-3 p-4">
            {/* Complete */}
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Completed</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    {/* {stats.complete} */} 12
                  </p>
                </div>
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FiActivity className="text-green-600" size={22} />
                </div>
              </div>
            </div>

            {/* Waiting */}
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Waiting</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1">
                    {/* {stats.waiting} */} 5
                  </p>
                </div>
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FiActivity className="text-yellow-600" size={22} />
                </div>
              </div>
            </div>

            {/* Missed */}
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Missed</p>
                  <p className="text-2xl font-bold text-red-600 mt-1">{/* {stats.missed} */} 2</p>
                </div>
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FiActivity className="text-red-600" size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
          <path
            d="M0,40L80,45C160,50,320,60,480,58C640,56,800,42,960,40C1120,38,1280,48,1360,53L1440,58L1440,100L0,100Z"
            fill="rgba(255,255,255,0.15)"
          />
        </svg>
      </div>

      {/* Patient Details */}

      <div className="flex flex-col lg:flex-row gap-6 mt-10 w-screen md:max-w-6xl">
        <div className="flex-1 ">
          <div className="bg-white rounded shadow overflow-hidden">
            {activePatient ? (
              <>
                {/* Header */}
                <div className="bg-linear-to-r from-[#059669] to-[#3ad28b] px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white rounded-full p-3">
                        <FaUser className="text-green-600" size={32} />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-white">{activePatient.name}</h1>
                        <p className="text-blue-100 text-sm">
                          Patient #{patients.findIndex((p) => p.active) + 1}
                        </p>
                      </div>
                    </div>

                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                      Add Report
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="">
                  {/* queue row */}
                  <div className="bg-opacity-20 backdrop-blur-sm">
                    <div className="grid grid-cols-1  gap-6">
                      <div className="mx-auto w-full max-w-7xl flex items-center gap-2 border  border-emerald-400/30 px-2">
                        <button className="shrink-0 px-4 py-3 rounded text-lg bg-zinc-100">
                          <FaAnglesLeft />
                        </button>

                        <div className="flex gap-2 overflow-x-auto flex-1 py-2 px-2 custom-scroll">
                          {patients.map((p, i) => {
                            let bgColor = "bg-gray-100 text-gray-800";
                            if (p.active)
                              bgColor = "bg-yellow-500 text-white ring-4 ring-yellow-200";
                            else if (p.status === "approved") bgColor = "bg-zinc-100 text-gray-800";
                            else if (p.status === "complete") bgColor = "bg-green-500 text-white";
                            else if (p.status === "missed") bgColor = "bg-red-500 text-white";

                            return (
                              <button
                                key={i}
                                className={`min-w-10 sm:min-w-12 h-9 sm:h-10 rounded-lg text-sm sm:text-base font-semibold transition hover:scale-105 ${bgColor}`}
                              >
                                {i + 1}
                              </button>
                            );
                          })}
                        </div>

                        <button
                          onClick={handleNext}
                          className="shrink-0 px-4 py-3 rounded text-lg bg-zinc-100"
                        >
                          <FaAnglesRight />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="content p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left */}
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <FiFileText className="text-blue-600 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Appointment ID</p>
                            <p className="text-gray-800 font-semibold font-mono">
                              {activePatient.appointmentId}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <FaUser className="text-blue-600 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Age & Gender</p>
                            <p className="text-gray-800 font-semibold">
                              {activePatient.age || "-"} / {activePatient.gender || "-"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <FaCalendar className="text-blue-600 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Appointment Date</p>
                            <p className="text-gray-800 font-semibold">
                              {new Date(activePatient.appointmentDate).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <FiActivity className="text-blue-600 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Visit Type</p>
                            <p className="text-gray-800 font-semibold">{activePatient.visitType}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs text-gray-600 font-medium mb-2">Chief Complaint</p>
                      <p className="text-gray-800 font-medium">{activePatient.problem}</p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-3 justify-center">
                      <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-semibold">
                        Skip
                      </button>

                      <button
                        onClick={handleNext}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                      >
                        Next Patient
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-center p-6 text-gray-500">No active patient</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
