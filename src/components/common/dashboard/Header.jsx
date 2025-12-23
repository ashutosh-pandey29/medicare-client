import { FaBell } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { NotificationBell } from "./NotificationBell";
import { useSocket } from "../../../context/SocketContext";
import { useEffect, useState } from "react";

export const Header = ({ handleSidebarToggle }) => {
  const { socket } = useSocket();
  const [notification, setNotification] = useState([]);

  // appointment listener

  useEffect(() => {
    if (!socket) return;

    const handleNewAppointment = (data) => {
      // console.log("New appointment:", data);
      setNotification((prev) => [data, ...prev]);
    };

    socket.on("NEW_APPOINTMENT", handleNewAppointment);
    return () => {
      socket.off("NEW_APPOINTMENT", handleNewAppointment);
    };
  }, [socket]);
  return (
    <header className="bg-zinc-50 h-16 w-full flex items-center justify-between px-5">
      {/* Left Section (Optional: logo / page title) */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-gray-700  md:hidden">User name </h1>
        <h1 className="text-xl font-semibold text-gray-700 hidden  md:block">Dashboard</h1>
      </div>

      {/* Right Section: Notification + Profile */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <NotificationBell notifications={notification} />

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="hidden md:flex items-center gap-3 content-center rounded px-3 py-2 text-gray-700 font-medium">
            <p>Welcome, Username</p>
          </div>
        </div>

        {/* toggle icon */}
        <button
          className="md:hidden bg-zinc-200 text-2xl rounded-lg py-3 px-5 cursor-pointer "
          onClick={handleSidebarToggle}
        >
          <GrMenu />
        </button>
      </div>
    </header>
  );
};
