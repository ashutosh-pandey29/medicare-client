import { useState } from "react";
import { updateAccountService } from "../../services/auth/auth.service";

export const useUpdateAccount = () => {
  const [loading, setLoading] = useState(false);

  

  const updateAccount = async (payload) => {
    try {
      const response = await updateAccountService(payload);

      if (!response) {
        throw new Error(response.message || "Account Information Not Updated");
      }

      return response;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {loading  ,  updateAccount}
};
