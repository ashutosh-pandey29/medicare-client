import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      setLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      // console.log(accessToken);

      // function that check token expired or not
      const isTokenExpired = (token) => {
        try {
          const decoded = jwtDecode(token);
          return decoded.exp * 1000 < Date.now();
        } catch (err) {
          return true; // invalid token considered expired
        }
      };

      // if no access token  or expired
      if (!accessToken || isTokenExpired(accessToken)) {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
            method: "POST",
            credentials: "include",
          });

          const jsonResponse = await response.json();
          const accessToken = jsonResponse.data.accessToken;
          // console.log(accessToken);

          localStorage.setItem("accessToken", accessToken);
          const decodedData = jwtDecode(accessToken);

          console.log(decodedData);
          setUser({
            accessToken,
            id: decodedData.userId,
            username: decodedData.username,
            role: decodedData.role,
            isVerified: decodedData.isVerified,
          });
        } catch (err) {
          console.log(err);
          setUser(null);
        } finally {
          setLoading(false);
        }
      } else {
        const decodedData = jwtDecode(accessToken);
        setUser({
          accessToken,
          id: decodedData.userId,
          username: decodedData.username,
          role: decodedData.role,
          isVerified: decodedData.isVerified,
        });
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  const login = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    const decodedData = jwtDecode(accessToken);

    setUser({
      accessToken,
      id: decodedData.userId,
      username: decodedData.username,
      role: decodedData.role,
      isVerified: decodedData.isVerified,
    });
  };

  const logout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "DELETE",
        credentials: "include",
      });

      const jsonResponse = await response.json();

      if (response.ok && jsonResponse.status) {
        toast.success(jsonResponse.message || "Logged out successfully");
      } else {
        toast.error(jsonResponse.message || "Logout failed");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      localStorage.removeItem("accessToken");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
