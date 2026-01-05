import { GrMenu } from "react-icons/gr";
import { Button } from "../../UI/Button";
import { NotificationBell } from "./NotificationBell";
import { useSocket } from "../../../context/SocketContext";
import { useEffect, useState } from "react";
import { useJwtDecode } from "../../../hooks/custom/useJwtDecode";
import { AiOutlineLogout } from "react-icons/ai";

export const Header = ({ handleSidebarToggle, role }) => {
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
        <h1 className="hidden md:block text-2xl font-extrabold tracking-wide">
          <span className="bg-linear-to-r from-[#064226] to-[#10B981] bg-clip-text text-transparent">
            Medicare Hospital
          </span>
        </h1>
      </div>

      {/* Right Section: Notification + Profile */}

      <div className="flex items-center gap-3">
        {/* Notification */}
        <NotificationBell
          notifications={notification}
          theme={role === "admin" ? "dark" : "light"}
        />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#0f0722] 
               hover:bg-[#047857] transition border border-zinc-100 bg-zinc-300"
          onClick={handleSidebarToggle}
          aria-label="Open menu"
        >
          <GrMenu className="text-3xl" />
        </button>

        
        <Button label="Logout" customCss="bg-red-500 hover:bg-red-600 md:block hidden"  />


      </div>
    </header>
  );
};
