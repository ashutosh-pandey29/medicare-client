import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import {jwtDecode} from "jwt-decode";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children, role }) => {
  const [socket, setSocket] = useState(null);
  const token = localStorage.getItem("accessToken");
  const decodedUserData = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (!role || !decodedUserData?.userId) return;

    const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
      withCredentials: true,
    });

    setSocket(newSocket);

    //  connect listener
    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);

      // join personal room after connection
      newSocket.emit("join", decodedUserData.userId.toString());
      console.log("Joined room:", decodedUserData.userId);

      // role-based join 
      if (role === "doctor") newSocket.emit("joinDoctor", decodedUserData.userId.toString());
      else if (role === "user") newSocket.emit("joinUser", decodedUserData.userId.toString());
      else if (role === "admin") newSocket.emit("joinAdmin", decodedUserData.userId.toString());
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected:", newSocket.id);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [role, decodedUserData?.userId]);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
