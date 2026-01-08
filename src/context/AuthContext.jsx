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
      console.log(decoded);
      return decoded.exp * 1000 < Date.now();
    } catch (err) {
      return true; // invalid token considered expired
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      let accessToken = localStorage.getItem("accessToken");

      if (isTokenExpired(accessToken)) {
        try {
          const response = await RefreshTokenService();
          accessToken = response?.data?.accessToken;
          if (!accessToken) throw new Error("No access token");
          localStorage.setItem("accessToken", accessToken);
        } catch {
          // clearAuth();
          return;
        }
      }

      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const decoded = jwtDecode(accessToken);
        setUser({
          userId: decoded.userId ?? null,
          username: decoded.username ?? "",
          role: decoded.role ?? "user",
        });
      } catch {
        clearAuth();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const setAuth = (accessToken) => {
    setLoading(true);
    localStorage.setItem("accessToken", accessToken);

    const decoded = jwtDecode(accessToken);
    setUser({
      userId: decoded.userId ?? null,
      username: decoded.username ?? "",
      role: decoded.role ?? "user",
    });

    setLoading(false);
  };

  const clearAuth = () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, clearAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
