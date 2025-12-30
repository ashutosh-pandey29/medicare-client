import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useFetch } from "../../hooks/custom/useFetch";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { useToken } from "../../hooks/custom/useToken";
import { toast } from "react-toastify";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { Button } from "../../components/UI/Button";

export const ApproveAppointment = () => {
  const [isOn, setIsOn] = useState(false);
  const [appointment, setAppointment] = useState([]);
  const [AutoApproval, setAutoApproval] = useState(false);
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


  // handle auto approval

  const handleToggleAutoApproval = () => {
    alert("implementing later");
  }
  

  // action

  const getAppointmentAction = (aptId) => [
    {
      label: "Approve ",
      icon: FaCheckCircle,
      onClick: () => handleApprove(aptId),
    },

    {
      label: "Reject ",
      icon: FaTimesCircle,
      onClick: () => alert("aa"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
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
        {/* <div className="relative z-10 p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="flex items-center justify-between   gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">Appointment Requests</h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  Manage all patient appointments that are waiting for approval

                </p>

                <p className="text-zinc-100 text-sm mt-2 animate-pulse">
                  * Enable Auto Approval to automatically confirm appointment requests and reduce manual effort.
                </p>

              </div>
            </div>
          </div>
        </div> */}

        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">Appointment Requests</h2>
                </div>

                <p className="text-emerald-100 text-base font-medium">
                  Manage all patient appointments that are waiting for approval
                </p>

                <p className="text-emerald-200 text-sm mt-2">
                  <span className="font-semibold text-white"></span> Enable{" "}
                  <span className="font-semibold text-white  animate-pulse">Auto Approval</span> to
                  automatically confirm appointment requests and reduce manual effort.
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

      <div className="max-w-full   mt-5  ">
        {/* Content */}

        <div className=" space-y-1.5 divide-gray-100 ">
          {appointment?.length === 0 ? (
            <>
              <NoDataFound message="No pending appointment requests at this time." />
              <div className=" text-center">
                <Button
                  label={AutoApproval ? "Disable Auto Approval" : " Enable Auto Approval"}
                  variant="outline"
                  onClick={()=>handleToggleAutoApproval()}
                />
              </div>
            </>
          ) : (
            appointment?.map((appointment, index) => (
              <CardRow key={index} actions={getAppointmentAction(appointment.appointmentId)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
