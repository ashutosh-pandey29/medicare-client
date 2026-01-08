import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { RefreshTokenService } from "../services/auth/auth.service";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // function that check token expired or not
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 < Date.now();
    } catch (err) {
      return true; // invalid token considered expired
    }
  };

  const initAuth = async () => {
    let accessToken = localStorage.getItem("accessToken");

    if (!accessToken || isTokenExpired(accessToken)) {
      try {
        const response = await RefreshTokenService();
        accessToken = response.data.accessToken;
        if (!accessToken) throw new Error("No access token returned");
        localStorage.setItem("accessToken", accessToken);
      } catch (err) {
        console.log("Refresh token failed", err);
        // toast.error("Session expired. Please login again.");
        clearAuth();
        setLoading(false);
        return;
      }
    }

    // decode and set user
    try {
      const decodedJwtData = jwtDecode(accessToken);
      setUser({
        userId: decodedJwtData.userId,
        username: decodedJwtData.username,
        role: decodedJwtData.role,
      });
    } catch (err) {
      console.log("Invalid access token", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const setAuth = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    const decodedJwtData = jwtDecode(accessToken);
    setUser({
      userId: decodedJwtData.userId,
      username: decodedJwtData.username,
      role: decodedJwtData.role,
    });
  };

  const clearAuth = async () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, clearAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
