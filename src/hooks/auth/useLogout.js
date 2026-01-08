import { useState } from "react";
import { logoutService } from "../../services/auth/auth.service";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { clearAuth } = useAuth();

  const logout = async () => {
    try {
      setLoading(true);

      const response = await logoutService();

      if (!response?.success) {
        throw new Error(response?.message || "Logout failed");
      }

      if (response.success) {
        clearAuth();
        toast.success(response.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Something went wrong while logging out");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};
