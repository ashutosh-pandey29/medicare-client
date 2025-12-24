import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useFetch } from "../../hooks/custom/useFetch";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { useToken } from "../../hooks/custom/useToken";
import { toast } from "react-toastify";
import { NoDataFound } from "../../components/basic/DataNotFound";

export const ApproveAppointment = () => {
  const [isOn, setIsOn] = useState(false);
  const [appointment, setAppointment] = useState([]);
  const token = useToken();
  const { decodedUser } = useJwtDecode();
  const userId = decodedUser?.userId;
  const { data, error, loading } = useFetch(
    userId ? `${import.meta.env.VITE_API_URL}/appointment/get/appointments/doctor/${userId}` : null
  );

  useEffect(() => {
    setAppointment(data.data);
  }, [data]);

  const handleApprove = async (appointmentId) => {
    try {
      if (!appointmentId) {
        throw new Error("Appointment ID missing");
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/appointment/update-status/${appointmentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : null,
          },
          body: JSON.stringify({ status: "approved" }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Failed to approve appointment");
      }

      const jsonResponse = await response.json();
      if (jsonResponse?.status) {
        toast.success(jsonResponse.message || "Appointment approved successfully");
        setAppointment((prev) => prev.filter((item) => item.appointmentId !== appointmentId));
      } else {
        throw new Error(jsonResponse?.message || "Approval failed");
      }
    } catch (error) {
      // console.error("Approve appointment error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-4 ">
      {/* page heading  */}

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
                  <h2 className="text-xl md:text-4xl font-bold text-white">Appointment Requests</h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  Manage all patient appointments that are waiting for approval
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

      <div className="max-w-full overflow-auto bg-white mt-5">
        {/* Content */}
        <div className="divide-y divide-gray-100  bg-white">
          {appointment?.length === 0 ? (
            <NoDataFound message="No pending appointment requests at this time." />
          ) : (
            appointment?.map((d) => (
              <div
                key={d._id}
                className="bg-white px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-50 transition rounded"
              >
                {/* Left Content */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900 text-base">{d.patientName}</h4>

                  <p className="text-[11px] md:text-sm  text-gray-700 leading-relaxed">
                    Appointment request from{" "}
                    <span className="font-medium text-gray-900">{d.name}</span> scheduled for{" "}
                    <span className="font-medium text-gray-900">
                      {new Date(d.appointmentDate).toDateString()}
                    </span>{" "}
                    regarding <span className="font-medium text-gray-900">{d.problem}</span>.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-3 md:mt-0">
                  {/* Approve */}
                  <div className="relative group">
                    <button
                      onClick={() => handleApprove(d.appointmentId)}
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white
                       p-2 rounded  shadow-sm transition cursor-pointer"
                    >
                      <FaCheckCircle size={18} />
                    </button>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                      Approve
                    </span>
                  </div>

                  {/* Reject */}
                  <div className="relative group">
                    <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2 rounded shadow-sm transition cursor-pointer">
                      <FaTimesCircle size={18} />
                    </button>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                      Reject
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
