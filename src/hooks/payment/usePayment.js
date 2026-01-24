import { useState } from "react";
import { createPaymentService, verifyPaymentService } from "../../services/payment/payment.service";

export const usePayment = () => {
  const [loading, setLoading] = useState(false);

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

  return { loading, createPayment, verifyPayment };
};
