import { useState } from "react";
import { forgotPasswordService } from "../../services/auth/auth.service";
import { toast } from "react-toastify";

export const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const forgotPassword = async (payload, setErrors) => {
    setLoading(true);
    try {
      const response = await forgotPasswordService(payload, setErrors);

      if (!response.success) {
        throw new Error(response.message || "Email can't be send. please try again letter");
      }

      return response;
    } catch (err) {
      if (err.errors && setErrors) {
        const formattedErrors = {};
        err.errors.map((e) => {
          if (formattedErrors[e.field]) {
            formattedErrors[e.field] += `, ${e.message}`;
          } else {
            formattedErrors[e.field] = e.message;
          }
        });
      }

      if (err.message) {
        toast.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, forgotPassword };
};
