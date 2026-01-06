import { useState } from "react";
import { myAccount } from "../../services/auth/auth.service";

export const useMe = () => {
  const [loading, setLoading] = useState(false);
  const myAccountInfo = async () => {
    try {
      setLoading(true);
      const response = await myAccount();

      if (!response.success) {
        console.log(response);
        throw new Error(response.message || "Something went wrong");
      }

      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { myAccountInfo, loading };
};
