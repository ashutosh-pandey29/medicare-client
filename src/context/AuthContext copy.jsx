import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        setLoading(false);
        // return;
      }

      try {
        const decodedData = jwtDecode(accessToken);
        console.log(decodedData);
        if (decodedData.exp * 1000 < Date.now()) {
          alert();
          // token expired then refresh
          const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
            method: "POST",
            credentials: "include",
          });

          const data = await response.json();
          console.log(data.data);
          if (response.ok && data.data.accessToken) {
            localStorage.setItem("accessToken", data.data.accessToken);

            
            const newDecoded = jwtDecode(data.data.accessToken);


            setUser({
              accessToken: newDecoded.accessToken,
              id: newDecoded.userId,
              username: newDecoded.username,
              role: newDecoded.role,
              isVerified: newDecoded.isVerified,
            });
          } else {
            logout();
          }
        } else {
          // token valid
          setUser({
            accessToken,
            id: decodedData.userId,
            username: decodedData.username,
            role: decodedData.role,
            isVerified: decodedData.isVerified,
          });
        }
      } catch (err) {
        console.log("Invalid token", err);
        logout();
      } finally {
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

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
