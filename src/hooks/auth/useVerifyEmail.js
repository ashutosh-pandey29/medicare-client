import { useState } from "react";
import { verifyEmailService } from "../../services/auth/auth.service";

export const useVerifyEmail = () => {
  const [loading, setLoading] = useState(false);

  const verifyEmail = async (token) => {
    try {
      setLoading(true);

      const response = await verifyEmailService(token);

      if (!response.success) {
        throw new Error(response.message || "Email Verification failed. please try again...");
      }
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, verifyEmail };
};
