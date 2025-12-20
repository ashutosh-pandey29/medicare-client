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

export const AppointmentConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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
          },
          body: JSON.stringify({
            amount: appointmentData.departmentId.fees,
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
                  },
                  body: JSON.stringify(res),
                }
              );

              const verifyData = await verifyResponse.json();

              if (verifyData.status) {
                console.log("verified");

                navigate(`/appointment/payment/success?appointmentId=${appointmentId}&mode=${paymentMethod}`, {
                  replace: true,
                });
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
          navigate(`/appointment/payment/success?appointmentId=${appointmentId}&mode=${paymentMethod}`, {
            replace: true,
          });
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* Success Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Appointment Scheduled Successfully
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thank you for choosing us! Your appointment has been scheduled.
            <br />
            <span className="text-green-600 font-semibold">Complete your payment</span> to confirm
            your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10  ">
          {/* col 1 */}

          <div>
            {/* Appointment Summary Card */}
            <div className="bg-white rounded shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment Details</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaUser className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Patient Name</p>
                    <p className="text-base font-semibold text-gray-900">
                      {appointmentData?.name || "----"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaStethoscope className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Doctor Name</p>
                    <p className="text-base font-semibold text-gray-900">
                      {appointmentData?.doctorId?.doctorName || "----"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaBuilding className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="text-base font-semibold text-gray-900">
                      {appointmentData?.departmentId?.departmentName || "--"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaCalendarAlt className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Appointment Date & Time</p>
                    <p className="text-base font-semibold text-gray-900">
                      {appointmentData?.appointmentDate
                        ? new Date(appointmentData.appointmentDate).toLocaleDateString("en-IN")
                        : "--"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaHashtag className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Appointment ID</p>
                    <p className="text-base font-semibold text-gray-900">
                      {appointmentData?.appointmentId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="text-base font-semibold text-gray-900">
                      {appointmentData?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                    <FaRupeeSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Consultation Fees</p>
                    <p className="text-xl font-bold text-green-600">
                      {appointmentData?.departmentId?.fees || "----"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* col 2 */}

          <div>
            {/* Payment Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Payment Method</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Online Payment Card */}
                <button
                  onClick={() => setPaymentMethod("online")}
                  className={`relative bg-white rounded-xl border-2 p-6 text-left transition-all hover:shadow-md ${
                    paymentMethod === "online"
                      ? "border-green-500 shadow-md"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  {paymentMethod === "online" && (
                    <div className="absolute top-4 right-4">
                      <FaCheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  )}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
                    <FaCreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Online Payment</h3>
                  <p className="text-sm text-gray-600">Pay now via UPI, Card, Net Banking</p>
                </button>

                {/* Pay at Hospital Card */}
                <button
                  onClick={() => setPaymentMethod("hospital")}
                  className={`relative bg-white rounded-xl border-2 p-6 text-left transition-all hover:shadow-md ${
                    paymentMethod === "hospital"
                      ? "border-green-500 shadow-md"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  {paymentMethod === "hospital" && (
                    <div className="absolute top-4 right-4">
                      <FaCheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  )}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
                    <FaMoneyBillWave className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pay at Hospital</h3>
                  <p className="text-sm text-gray-600">Pay during visit at reception counter</p>
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <button
                onClick={handleConfirmation}
                disabled={!paymentMethod}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${
                  paymentMethod
                    ? "bg-green-500 hover:bg-green-600 shadow-sm hover:shadow"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {paymentMethod === "online"
                  ? "Proceed to Payment"
                  : paymentMethod === "hospital"
                  ? "Confirm Appointment"
                  : "Select Payment Method"}
              </button>

              <NavLink
                to={"/dashboard/user/appointment"}
                className="w-full py-4 px-6 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all flex items-center justify-center"
              >
                <FaHome className="w-5 h-5 mr-2" />
                Back to Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
