import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useJwtDecode } from "../hooks/custom/useJwtDecode";
import { jwtDecode } from "jwt-decode";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children, role }) => {
  const [socket, setSocket] = useState(null);
  const token = localStorage.getItem("accessToken");
  const decodedUserData = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (!role || !decodedUserData) return;

    const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
      // transports: ["websocket"],
      query: { userId: decodedUserData.userId, role: decodedUserData.role },
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      newSocket.emit("joinDoctor", decodedUserData.userId.toString());
      // console.log("Socket connected:", newSocket.id);
    });

    if (role === "doctor") {
      newSocket.emit("joinDoctor", decodedUserData.userId.toString());
    } else if (role === "user") {
      newSocket.emit("joinUser", decodedUserData.userId.toString());
    } else if (role === "admin") {
      newSocket.emit("joinAdmin", decodedUserData.userId.toString());
    }

    return () => {
      newSocket.disconnect();
    };
  }, [role, decodedUserData?.userId]);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
