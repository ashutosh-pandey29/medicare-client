import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { RefreshTokenService } from "../services/auth/auth.service";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initAuth = async () => {
    try {
      const response = await RefreshTokenService();

      console.log("refresh token response:", response.data);
      const accessToken = response.data.accessToken;
      if (!accessToken) throw new Error("No access token returned");

      localStorage.setItem("accessToken", accessToken);

      const decodedJwtData = jwtDecode(accessToken);
      console.log("decodedJwtData", decodedJwtData);

      setUser({
        userId: decodedJwtData.userId,
        username: decodedJwtData.username,
        role: decodedJwtData.role,
      });
    } catch (err) {
      console.log("err", err);

      // setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    initAuth();
  }, []);

  const login = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    const decodedJwtData = jwtDecode(accessToken);

    setUser({
      userId: decodedJwtData.userId,
      username: decodedJwtData.username,
      role: decodedJwtData.role,
    });
  };

  const logout = async () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
