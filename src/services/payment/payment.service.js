import api from "../../api/axios";

export const createPaymentService = (appointmentId) => {
 return  api.post("/payment/create-order", {appointmentId});
};


export const verifyPaymentService = (payload)=>{
  return api.post("/payment/verify-payment",  payload);
}