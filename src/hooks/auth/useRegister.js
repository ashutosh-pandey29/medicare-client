import { useState } from "react";
import { registerService } from "../../services/auth/auth.service";
import { toast } from "react-toastify";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const register = async (payload, setErrors) => {
    setLoading(true);

    try {
      const response = await registerService(payload);

      if (!response.success) {
        throw new Error(response.message || "Login Failed");
      }
      return response;
    } catch (err) {
      if (err.errors && setErrors) {
        const formattedErrors = {};

        err.errors.forEach((e) => {
          if (formattedErrors[e.field]) {
            formattedErrors[e.field] += `, ${e.message}`;
          } else {
            formattedErrors[e.field] = e.message;
          }
        });

        setErrors(formattedErrors);
      }

      if (err.message) {
        toast.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};
