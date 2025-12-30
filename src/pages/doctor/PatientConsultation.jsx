import { FaAnglesRight, FaAnglesLeft, FaUser, FaCalendar, FaPhone } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToken } from "../../hooks/custom/useToken";
import { FiActivity, FiFileText } from "react-icons/fi";
import { toast } from "react-toastify";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { Button } from "../../components/UI/Button";

export const PatientConsultation = () => {
  const navigate = useNavigate();
  const token = useToken();
  const [patients, setPatients] = useState([]);

  const markActive = (p) => {
    const activeIdx = p.find((p) => p.status === "approved");

    return p.map((p, i) => ({
      ...p,
      active: i === activeIdx,
    }));
  };

  // Fetch patient queue on mount
  useEffect(() => {
    const fetchPatientQueue = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/get/patient-queue`, {
          method: "GET",
        });

        const jsonResponse = await response.json();

        // const activePatient = markActive(jsonResponse.data);
        setPatients(jsonResponse.data);
      } catch (error) {
        console.error("Error fetching patient queue:", error);
      }
    };

    fetchPatientQueue();
  }, []);

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

  // const handleNext = async () => {
  //   const currentIndex = patients.findIndex((p) => p.active);
  //   if (currentIndex === -1) return;

  //   const currentPatient = patients[currentIndex];

  //   // console.log("cp", currentPatient);

  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/appointment/update-status/${currentPatient.appointmentId}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: token ? `Bearer ${token}` : null,
  //         },
  //         body: JSON.stringify({ status: "completed" }),
  //       }
  //     );

  //     const jsonResponse = await response.json();

  //     if (!response.ok) {
  //       throw new Error();
  //     }

  //     if (jsonResponse.status) {
  //       toast.success(jsonResponse.message || "Appointment marked as completed");

  //       setPatients((prev) => {
  //         const filtered = prev.filter(
  //           (item) => item.appointmentId !== currentPatient.appointmentId
  //         );

  //         const nextIndex = Math.min(currentIndex, filtered.length + 1);

  //         return filtered.map((p, i) => ({
  //           ...p,
  //           active: i === nextIndex,
  //         }));
  //       });

  //       // handleActivePatient(currentIndex + 1);
  //     } else {
  //       toast.success(jsonResponse.message || "Appointment not  marked as completed");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Server error. Please try again in a moment.");
  //   }
  // };

  // Get currently active patient for details section
  // const activePatient = patients.find((p) => p.active);

  return (
    <section className="max-w-7xl mx-auto overflow-x-hidden">
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
        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">
                    Patient Consultation & Reports
                  </h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  Access patient details, upload reports, and provide medical care.
                </p>
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

     <div className="flex flex-col lg:flex-row gap-6 mt-5 w-full">
      <div className="flex-1">
        <div className="bg-white rounded shadow overflow-hidden">

          {/* Header */}
          <div className="bg-linear-to-r from-[#059669] to-[#3ad28b] px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3">
                  <FaUser className="text-green-600" size={32} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    John Doe
                  </h1>
                  <p className="text-emerald-100 text-sm">
                    Patient #1
                  </p>
                </div>
              </div>
                
                <Button label={"Add Report"} variant="light" onClick={()=>navigate("../report-entry")}/>
            </div>
          </div>

          {/* Queue */}
          <div className="bg-opacity-20 backdrop-blur-sm">
            <div className="mx-auto w-full max-w-7xl flex items-center gap-2 border-b border-emerald-100/30 px-2 py-2">
              <button className="shrink-0 px-4 py-3 rounded bg-zinc-100">
                <FaAnglesLeft />
              </button>

              <div className="flex gap-2 overflow-x-auto flex-1 px-2">
                <button className="min-w-10 h-9 rounded bg-yellow-500 text-white font-semibold">
                  1
                </button>
                <button className="min-w-10 h-9 rounded bg-zinc-100 font-semibold">
                  2
                </button>
                <button className="min-w-10 h-9 rounded bg-green-500 text-white font-semibold">
                  3
                </button>
              </div>

              <button className="shrink-0 px-4 py-3 rounded bg-zinc-100">
                <FaAnglesRight />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Left */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FiFileText className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Appointment ID
                    </p>
                    <p className="text-gray-800 font-semibold font-mono">
                      APPT-0012
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaCalendar className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Appointment Date
                    </p>
                    <p className="text-gray-800 font-semibold">
                      12 Dec 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-gray-600 font-medium mb-2">
                Patient Problem
              </p>
              <p className="text-gray-800 font-medium">
                Fever, headache, and general weakness.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3 justify-center">
           
                <Button label={"Skip"} variant="danger"/>

                <Button label={"Next"} variant="primary"/>
                
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};
