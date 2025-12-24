import { GrMenu } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

import { NotificationBell } from "./NotificationBell";
import { useSocket } from "../../../context/SocketContext";
import { useEffect, useState } from "react";
import { useJwtDecode } from "../../../hooks/custom/useJwtDecode";

export const Header = ({ handleSidebarToggle }) => {
  const { socket } = useSocket();
  const [notification, setNotification] = useState([]);
  const { decodedUser } = useJwtDecode();

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
    <header className="h-16 w-full flex items-center justify-between px-5 z-50">
      {/* Left Section (Optional: logo / page title) */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-gray-700  md:hidden">{decodedUser?.username}</h1>
        <h1 className="text-xl font-semibold text-gray-700 hidden  md:block">
          <span className="text-2xl font-extrabold tracking-wide text-[#064226]">
            Medicare <span className="text-[#10B981]">Hospital</span>
          </span>
        </h1>
      </div>

      {/* Right Section: Notification + Profile */}

      <div className="flex items-center gap-3">
        {/* Notification */}
        <NotificationBell notifications={notification} />

        {/* Language Switch */}
        <button
          className="hidden md:flex items-center gap-1 px-3 py-2 
               rounded-lg text-[#0f0722] 
               hover:bg-[#d7cfdd] transition"
          title="Change language"
        >
          <LuLanguages className="text-lg" />
          <span className="text-sm">EN</span>
        </button>

        {/* Profile */}
        <button
          className="hidden md:flex items-center gap-2 px-3 py-2 
               rounded-lg text-[#0f0722] 
               hover:bg-[#d7cfdd] transition"
          title="Profile"
        >
          <CgProfile className="text-xl" />
          <span className="text-sm font-medium">{decodedUser?.username}</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#0f0722] 
               hover:bg-[#047857] transition border border-zinc-100 bg-zinc-300"
          onClick={handleSidebarToggle}
          aria-label="Open menu"
        >
          <GrMenu className="text-2xl" />
        </button>
      </div>
    </header>
  );
};
