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
   
  );
};
