import { useState } from "react";
import { resetPasswordService } from "../../services/auth/auth.service";

export const useResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const resetPassword = async (payload) => {
    try {
      setLoading(true);

      const response = await resetPasswordService(payload);

      if (!response.success) {
        throw new Error(response.message || "Password Updating Failed");
      }

      return response;
    } catch (err) {

      
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, resetPassword };
};
