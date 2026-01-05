import { useState } from "react";
import { loginService } from "../../services/auth/auth.service";
import { toast } from "react-toastify";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (payload, setErrors) => {
    setLoading(true);

    try {
      const response = await loginService(payload);

      // console.log("response", response);

      if (!response.success) {
        throw new Error(response.message || "Login Failed");
      }
      return response;
    } catch (err) {
      // Field errors

      if (err.errors && setErrors) {
        const formattedErrors = {};

        err.errors.forEach((e) => {
          // agar multiple errors per field → join with comma
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

      // throw err;

      // console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
