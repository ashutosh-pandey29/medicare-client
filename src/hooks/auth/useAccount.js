import { useState } from "react";
import {
  deleteAccountService,
  myAccount,
  updateAccountService,
  updatePasswordService,
} from "../../services/auth/auth.service";
import { toast } from "react-toastify";

export const useAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //!--------------- FETCH ACCOUNT INFORMATION -----------------------

  const myAccountInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await myAccount();

      if (!response.success) {
        console.log(response);
        throw new Error(response.message || "Something went wrong");
      }

      return response;
    } catch (err) {
      setError(err.message);
      throw err;
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //!------------ UPDATE ACCOUNT INFO (USERNAME , EMAIL)-----------------

  const updateAccount = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await updateAccountService(payload);

      if (!response?.success) {
        throw new Error(response?.message || "Account Information Not Updated");
      }

      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //!------------------------- UPDATE USER PASSWORD ------------------

  const updatePassword = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await updatePasswordService(payload);

      if (!response.success) {
        throw new Error(response.message || "Password not updated");
      }

      return response;
    } catch (err) {
      console.log(err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // delete account
  const deleteAccount = async () => {
    setLoading(true);
    try {
      const response = await deleteAccountService();
      if (!response.success) {
        console.log(response);
        throw new Error(response.message || "Something went wrong");
      }
      return response;
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Account deletion failed ");
    } finally {
      setLoading(false);
    }
  };

  return { loading, myAccountInfo, updateAccount, updatePassword, deleteAccount };
};
