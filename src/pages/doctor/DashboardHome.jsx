import { MiniCard } from "../../components/common/dashboard/card/MiniCard";
import { FaUsers } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { BsFilterSquareFill } from "react-icons/bs";
// import { useSocket } from "../../context/SocketContext";
// import { useState, useEffect } from "react";

export const DashboardHome = () => {
  // const { socket } = useSocket();
  // const [notification, setNotification] = useState([]);

  // appointment listener

  // useEffect(() => {
  //   if (!socket) return;

  //   const handleNewAppointment = (data) => {
  //     // console.log("New appointment:", data);
  //     setNotification((prev) => [data, ...prev]);
  //   };

  //   socket.on("NEW_APPOINTMENT", handleNewAppointment);
  //   return () => {
  //     socket.off("NEW_APPOINTMENT", handleNewAppointment);
  //   };
  // }, [socket]);

  return (
    <>
      <section className="h-auto">
        {/* top section quick card  */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MiniCard
            icon={<FaUsers className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Today's Appointments"
          />

          <MiniCard
            icon={<MdTimer className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Patients Waiting"
          />

          <MiniCard
            icon={<FaCircleCheck className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Completed Consultations"
          />

          <MiniCard
            icon={<MdOutlinePendingActions className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Pending Reports"
          />
        </div> */}

        {/* recent activity */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-5  gap-1">
          <div>
            {/* <h1>notify</h1>
            {notification.map((apt) => (
              <div key={apt.appointmentId} className="p-4 mb-2 border rounded shadow">
                <p>{ apt.message}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};
