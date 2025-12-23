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
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-b-zinc-100">
        <div className="md:mb-8 mb-4">
          <h2 className="text-base md:text-4xl lg:text-3xl font-extrabold bg-linear-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
            Appointment Requests
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Review and approve patient appointment requests
          </p>
        </div>

        {/* Auto Approve Toggle */}
        {/* <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Auto Approve</span>

          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div className="h-5 w-10 rounded-full bg-red-400 transition peer-checked:bg-green-500"></div>
            <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-5"></span>
          </label>
        </div> */}
      </div>

      <div className="w-full overflow-x-auto mt-10">
        <div className="space-y-0">
          {appointment?.length === 0 ? (
            <NoDataFound message="No pending appointment requests at this time. " />
          ) : (
            appointment?.map((d) => (
              <div
                key={d._id}
                className="bg-white  h-[10vh] border-b border-b-zinc-100 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-bold">{d.patientName}</h4>

                  <p className="text-sm text-gray-800">
                    Appointment request received from{" "}
                    <span className="font-semibold">{d.name}</span> scheduled for{" "}
                    <span className="font-semibold">
                      {new Date(d.appointmentDate).toDateString()}
                    </span>{" "}
                    for <span className="font-semibold">{d.problem}</span>.
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="relative group">
                    <button
                      onClick={() => handleApprove(d.appointmentId)}
                      className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      <FaCheckCircle />
                    </button>

                    <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2  scale-0 group-hover:scale-100 transition rounded bg-black text-white text-xs px-2 py-1">
                      Approve
                    </span>
                  </div>

                  <div className="relative group">
                    <button className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                      <FaTimesCircle />{" "}
                    </button>

                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  scale-0 group-hover:scale-100 transition rounded bg-black text-white text-xs px-2 py-1">
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
