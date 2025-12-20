import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useJwtDecode = () => {
  const [decodedUser, setDecodedUser] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setDecodedUser(null);
        return;
      }

      const decodedUserData = jwtDecode(token);
      setDecodedUser(decodedUserData);
    } catch (err) {
      console.log("Token decode error:", err);
      setDecodedUser(null);
    }
  }, []);

  return { decodedUser };
};
