import { useState } from "react";
import {
  createPaymentService,
  downloadInvoiceService,
  getAllPaymentForAdminService,
  getAllPaymentService,
  verifyPaymentService,
} from "../../services/payment/payment.service";

export const usePayment = () => {
  const [loading, setLoading] = useState(false);


   const getAllPaymentForAdmin = async () => {
    setLoading(true);
    try {
      const response = await getAllPaymentForAdminService();
      if (!response.success) {
        throw new Error(response.message || "Payment not fetched ");
      }

      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };



  const getAllPayment = async () => {
    setLoading(true);
    try {
      const response = await getAllPaymentService();
      if (!response.success) {
        throw new Error(response.message || "Payment not fetched ");
      }

      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createPayment = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await createPaymentService(appointmentId);
      if (!response.success) {
        throw new Error(response.message || "Payment not created ");
      }

      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // verify payment

  const verifyPayment = async (payload) => {
    setLoading(true);
    try {
      const response = await verifyPaymentService(payload);

      if (!response.success) {
        throw new Error(response.message || "Payment failed");
      }

      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadInvoice = async (paymentId) => {
    setLoading(true);
    try {
      const response = await downloadInvoiceService(paymentId);
     
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, createPayment, verifyPayment, getAllPayment, downloadInvoice ,  getAllPaymentForAdmin };
};
