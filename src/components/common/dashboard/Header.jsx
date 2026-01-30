import { GrMenu } from "react-icons/gr";
import { Button } from "../../UI/Button";
import { NotificationBell } from "./NotificationBell";
import { useSocket } from "../../../context/SocketContext";
import { useEffect, useState } from "react";
import { useJwtDecode } from "../../../hooks/custom/useJwtDecode";
import notificationSound from "../../../assets/audio/notifySound.wav";
import { useLogout } from "../../../hooks/auth/useLogout";
import { MdFullscreen } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";

export const Header = ({ handleSidebarToggle, role }) => {
  const { socket } = useSocket();
  const [notifications, setNotifications] = useState([]);
  const { decodedUser } = useJwtDecode();
  const { logout } = useLogout();

  console.log(decodedUser);

  //Listen  all notifications
  useEffect(() => {
    if (!socket || !decodedUser?.userId) return;

    const handleNotification = (data) => {
      setNotifications((prev) => [data, ...prev]);
      // play audio when  notification received
      const audio = new Audio(notificationSound);
      audio.play().catch((err) => console.log("Audio play failed:", err));
    };

    // join personal room
    console.log("Joining room:", decodedUser.userId);
    socket.emit("join", decodedUser.userId);
    socket.on("notification", handleNotification);

    return () => {
      socket.off("notification", handleNotification);
    };
  }, [socket, decodedUser]);

  useEffect(() => {
    console.log("decodedUser changed:", decodedUser);
  }, [decodedUser]);

  return (
    <header className="h-16 w-full flex items-center justify-between px-2 z-50">
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

      <div className="flex items-center  gap-3">
        {/* Notification */}
        <NotificationBell
          notifications={notifications}
          theme={role === "admin" ? "dark" : "light"}
        />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2  rounded-lg text-white 
               hover:bg-[#047857] transition  bg-gray-800"
          onClick={handleSidebarToggle}
          aria-label="Open menu"
        >
          <GrMenu className="text-xl" />
        </button>

        <Button
          label="Logout"
          customCss="bg-red-500 hover:bg-red-600 md:block hidden"
          size="sm"
          onClick={() => logout()}
        />
      </div>
    </header>
  );
};
