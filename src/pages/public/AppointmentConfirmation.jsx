import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaUser,
  FaStethoscope,
  FaBuilding,
  FaCalendarAlt,
  FaHashtag,
  FaPhone,
  FaDollarSign,
  FaCreditCard,
  FaMoneyBillWave,
  FaHome,
  FaRupeeSign,
} from "react-icons/fa";

import { useNavigate, NavLink, useSearchParams } from "react-router-dom";
import { PreLoader } from "../../components/UI/loaders/PreLoader";
import { toast } from "react-toastify";
import { useToken } from "../../hooks/custom/useToken";

export const AppointmentConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = useToken();
  const appointmentId = searchParams.get("appointmentId");

  useEffect(() => {
    setLoading(true);

    const fetchAppointmentData = async () => {
      // console.log(appointmentId);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/appointment/get/${appointmentId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const jsonResponse = await response.json();
        console.log(jsonResponse.data);
        setAppointmentData(jsonResponse.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointmentData();
  }, []);

  /**
   * ======================================================
   * ! HANDLE PAYMENT
   * ======================================================
   */

  const handleConfirmation = async () => {
    // check payment method selected for not
    if (!paymentMethod) return;

    if (paymentMethod === "online") {
      try {
        console.log("online");

        //  crete order form backend

        const response = await fetch(`${import.meta.env.VITE_API_URL}/payment/create-order`, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify({
            appointmentId: appointmentId,
          }),
        });

        const jsonResponse = await response.json();

        console.log(jsonResponse.data.order);

        if (response.ok && jsonResponse.status) {
          console.log("pay make ");
          // options

          const options = {
            key: `${import.meta.env.VITE_RAZORPAY_KEY}`, //key
            amount: jsonResponse.data.order.amount,
            currency: "INR",
            name: "Appointment Booking",
            description: "Doctor Appointment Payment",
            order_id: jsonResponse.data.order.id,

            // verify payment
            handler: async (res) => {
              const verifyResponse = await fetch(
                `${import.meta.env.VITE_API_URL}/payment/verify-payment`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : "",
                  },
                  body: JSON.stringify({
                    appointmentId: appointmentId,
                    razorpay_order_id: res.razorpay_order_id,
                    razorpay_payment_id: res.razorpay_payment_id,
                    razorpay_signature: res.razorpay_signature,
                  }),
                }
              );

              const verifyData = await verifyResponse.json();

              if (verifyData.status) {
                console.log("verified");

                navigate(
                  `/appointment/payment/success?appointmentId=${appointmentId}&mode=${paymentMethod}`,
                  {
                    replace: true,
                  }
                );
              } else {
                console.log("verification failed");
              }
            },
            theme: {
              color: "#0abf53",
            },
          };

          //  Open  UI
          const razor = new window.Razorpay(options);
          razor.open();
        } else {
          console.log("filed to pay ");
          throw new Error("response.message");
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (paymentMethod === "hospital") {
      // console.log("pay at hospital")
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/appointment/confirm-appointment`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify({
              appointmentId,
              status: "pending",
              paymentAmount: appointmentData.departmentId.fees,
              paymentStatus: "pending",
            }),
          }
        );

        const jsonResponse = await response.json();
        if (response.ok && jsonResponse.status) {
          toast.success(jsonResponse.message);
          navigate(
            `/appointment/payment/success?appointmentId=${appointmentId}&mode=${paymentMethod}`,
            {
              replace: true,
            }
          );
        } else {
          throw new Error(response.message);
        }

        console.log(jsonResponse);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  if (!loading && !appointmentData) {
    return <PreLoader />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-1 md:py-10 px-1 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* SUCCESS HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5 ">
            <div className="flex items-center justify-center md:w-24 md:h-24 w-15 h-15 rounded-full bg-green-100">
              <FaCheckCircle className="md:w-14 md:h-14 w-6 h-6 text-green-600  " />
            </div>
          </div>

          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900">
            Appointment Scheduled Successfully
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Thank you for choosing us! Your appointment has been scheduled.
            <br />
            <span className="text-green-600 font-semibold">Complete your payment</span> to confirm
            your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN - APPOINTMENT DETAILS */}
          <div className="bg-white rounded shadow border border-gray-200 p-4 sm:p-9">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Appointment Summary</h2>

            <div className="space-y-5">
              {[
                {
                  icon: <FaUser />,
                  label: "Patient Name",
                  value: appointmentData?.name || "—",
                },
                {
                  icon: <FaStethoscope />,
                  label: "Doctor",
                  value: appointmentData?.doctorId?.doctorName || "—",
                },
                {
                  icon: <FaBuilding />,
                  label: "Department",
                  value: appointmentData?.departmentId?.departmentName || "—",
                },
                {
                  icon: <FaCalendarAlt />,
                  label: "Date & Time",
                  value: appointmentData?.appointmentDate
                    ? new Date(appointmentData.appointmentDate).toLocaleDateString("en-IN")
                    : "—",
                },
                {
                  icon: <FaHashtag />,
                  label: "Appointment ID",
                  value: appointmentData?.appointmentId || "—",
                },
                {
                  icon: <FaPhone />,
                  label: "Contact Number",
                  value: appointmentData?.phone || "—",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* FEES */}
              <div className="pt-5 border-t border-gray-200 flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 mr-4">
                  <FaRupeeSign />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consultation Fee</p>
                  <p className="text-2xl font-semibold text-green-600">
                    ₹{appointmentData?.departmentId?.fees || "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – PAYMENT */}
          <div className="mt-0 md:mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Payment Method</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {/* ONLINE */}
              <button
                onClick={() => setPaymentMethod("online")}
                className={`relative rounded-2xl border-2 p-6 text-left transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer
              ${
                paymentMethod === "online"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
              >
                {paymentMethod === "online" && (
                  <FaCheckCircle className="absolute top-4 right-4 text-green-500 w-5 h-5" />
                )}
                <FaCreditCard className="text-green-600 w-7 h-7 mb-4" />
                <h3 className="font-semibold text-gray-900">Online Payment</h3>
                <p className="text-sm text-gray-600 mt-1">UPI, Debit/Credit Card, Net Banking</p>
              </button>

              {/* HOSPITAL */}
              <button
                onClick={() => setPaymentMethod("hospital")}
                className={`relative rounded-2xl border-2 p-6 text-left transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer
              ${
                paymentMethod === "hospital"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
              >
                {paymentMethod === "hospital" && (
                  <FaCheckCircle className="absolute top-4 right-4 text-green-500 w-5 h-5" />
                )}
                <FaMoneyBillWave className="text-green-600 w-7 h-7 mb-4" />
                <h3 className="font-semibold text-gray-900">Pay at Hospital</h3>
                <p className="text-sm text-gray-600 mt-1">Pay at reception during visit</p>
              </button>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <button
                onClick={handleConfirmation}
                disabled={!paymentMethod}
                className={`w-full py-4 rounded-xl text-white font-semibold transition-all  cursor-pointer
              ${
                paymentMethod
                  ? "bg-green-600 hover:bg-green-700 shadow-sm"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              >
                {paymentMethod === "online"
                  ? "Proceed to Secure Payment"
                  : paymentMethod === "hospital"
                  ? "Confirm Appointment"
                  : "Select a Payment Method"}
              </button>

              <NavLink
                to="/dashboard/user/appointments"
                className="w-full py-4 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium flex items-center justify-center hover:shadow-sm"
              >
                <FaHome className="mr-2" />
                Go to Dashboard
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
