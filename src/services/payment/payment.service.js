import api from "../../api/axios";

export const getAllPaymentService = () => {
  return api.get("/payment/details");
};

export const getAllPaymentForAdminService = () => {
  return api.get("/payment/all");
};

export const createPaymentService = (appointmentId) => {
  return api.post("/payment/create-order", { appointmentId });
};

export const verifyPaymentService = (payload) => {
  return api.post("/payment/verify-payment", payload);
};

export const downloadInvoiceService = (paymentId) => {
  return api.get(`/payment/download-invoice/${paymentId}`, {
    responseType: "blob",
  });
};
