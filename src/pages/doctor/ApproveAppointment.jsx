import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { Button } from "../../components/UI/Button";
import { useAppointment } from "../../hooks/appointment/useAppointment";
import { NotFound } from "../../components/basic/NotFound";
import { toast } from "react-toastify";

export const ApproveAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [AutoApproval, setAutoApproval] = useState(false);

  const { loading, fetchAppointmentForDoctor, updateAppointment } = useAppointment();

  useEffect(() => {
    const getAppointment = async () => {
      const response = await fetchAppointmentForDoctor();
      console.log(response);
      if (response.success) {
        setAppointment(response.data);
      }
    };
    getAppointment();
  }, []);

  const handleAppointmentAction = async (aptId, status) => {
    const payload = {
      appointmentId: aptId,
      status: status,
    };
    const response = await updateAppointment(payload);

    if (response.success) {
      toast.success(response.message || "appointment confirmed");
      setAppointment((prev) => prev.filter((apt) => apt.appointmentId !== aptId));
    }
  };

  const getAppointmentAction = (aptId) => [
    {
      label: "Approve ",
      icon: FaCheckCircle,
      onClick: () => handleAppointmentAction(aptId, "confirmed"),
    },

    {
      label: "Reject ",
      icon: FaTimesCircle,
      onClick: () => handleAppointmentAction(aptId, "rejected"),
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

      <div className="max-w-full   mt-5 h-screen  ">
        {/* Content */}

        <div className=" space-y-2.5 divide-gray-100 ">
          {appointment?.length === 0 ? (
            <>
              <NotFound
                message="Nothing Here Yet"
                description="New appointment requests will appear here when patients book."
              />
            </>
          ) : (
            appointment?.map((appointment, index) => (
              <CardRow
                key={index}
                title={"New Appointment"}
                status={"waiting for approval"}
                message={
                  <>
                    Patient <strong>{appointment.name}</strong> has requested an appointment for{" "}
                    <strong> {appointment.appointmentDate}</strong>. The request is awaiting your
                    approval.
                  </>
                }
                actions={getAppointmentAction(appointment.appointmentId)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
