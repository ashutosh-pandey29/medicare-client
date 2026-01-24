import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaUser,
  FaStethoscope,
  FaBuilding,
  FaCalendarAlt,
  FaPhone,
  FaRupeeSign,
  FaCreditCard,
  FaMoneyBillWave,
  FaHome,
} from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useAppointment } from "../../hooks/appointment/useAppointment";
import { usePayment } from "../../hooks/payment/usePayment";

export const AppointmentConfirmation = () => {
  const [searchParams] = useSearchParams();
  const appointmentId = searchParams.get("appointmentId");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [appointmentData, setAppointmentData] = useState([]);
  const navigate = useNavigate();

  const { loading, fetchAppointmentById } = useAppointment();
  const { createPayment, verifyPayment } = usePayment();

  /**=======FETCH APPOINTMENT DATA FOR PREVIEW */

  useEffect(() => {
    const fetchAppointmentData = async () => {
      const response = await fetchAppointmentById(appointmentId);

      console.log(response);

      if (response.success) {
        setAppointmentData(response.data);
      }
    };

    fetchAppointmentData();
  }, []);

  /**===========HANDLE PAYMENT======= */

  const handleConfirmation = async () => {
    // check payment method selected for not
    if (!paymentMethod) return;

    if (paymentMethod === "online") {
      try {
        console.log("online");

        //  crete order form backend

        // const response = await fetch(`${import.meta.env.VITE_API_URL}/payment/create-order`, {
        //   method: "POST",

        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: token ? `Bearer ${token}` : "",
        //   },
        //   body: JSON.stringify({
        //     appointmentId: appointmentId,
        //   }),
        // });

        // const jsonResponse = await response.json();

        // console.log(jsonResponse.data.order);

        const response = await createPayment(appointmentId);

        console.log(response);

        if (response && response.success) {
          console.log("pay make ");
          // options

          const options = {
            key: `${import.meta.env.VITE_RAZORPAY_KEY}`, //key
            amount: response.data.amount,
            currency: "INR",
            name: "Medicare Hospital",
            description: "Appointment Payment",
            order_id: response.data.id,

            // verify payment
            handler: async (res) => {
              const payload = {
                appointmentId: appointmentId,
                razorpay_order_id: res.razorpay_order_id,
                razorpay_payment_id: res.razorpay_payment_id,
                razorpay_signature: res.razorpay_signature,
              };
              const response = await verifyPayment(payload);

              if (response && response.success) {
                navigate(
                  `/appointment/payment/success?appointmentId=${appointmentId}&mode=${paymentMethod}`,
                  {
                    replace: true,
                  }
                );
              } else {
                console.log("internal server error");
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

    // if (paymentMethod === "hospital") {
    //   // console.log("pay at hospital")
    //   try {
    //     const token = localStorage.getItem("accessToken");
    //     const response = await fetch(
    //       `${import.meta.env.VITE_API_URL}/appointment/confirm-appointment`,
    //       {
    //         method: "PATCH",
    //         headers: {
    //           "Content-type": "application/json",
    //           Authorization: token ? `Bearer ${token}` : "",
    //         },
    //         body: JSON.stringify({
    //           appointmentId,
    //           status: "pending",
    //           paymentAmount: appointmentData.departmentId.fees,
    //           paymentStatus: "pending",
    //         }),
    //       }
    //     );

    //     const jsonResponse = await response.json();
    //     if (response.ok && jsonResponse.status) {
    //       toast.success(jsonResponse.message);
    //       navigate(
    //         `/appointment/payment/success?appointmentId=${appointmentId}&mode=${paymentMethod}`,
    //         {
    //           replace: true,
    //         }
    //       );
    //     } else {
    //       throw new Error(response.message);
    //     }

    //     console.log(jsonResponse);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl p-6 space-y-8">
          {/* HEADER */}
          <div className="text-center p-5 border-b border-b-zinc-200">
            <h1 className="text-2xl font-bold text-green-600 flex items-center gap-1 justify-center ">
              <FaWallet className="w-8 h-8 " />
              <p>Pay for Your Appointment</p>
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Your appointment details are saved. Please choose a payment method to complete the
              booking.
            </p>
          </div>

          {/* APPOINTMENT SUMMARY */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Appointment Summary</h2>

            <div className="space-y-4">
              {[
                { icon: <FaUser />, label: "Patient", value: appointmentData.name },
                {
                  icon: <FaStethoscope />,
                  label: "Doctor",
                  value: appointmentData.doctorName,
                },
                {
                  icon: <FaBuilding />,
                  label: "Department",
                  value: appointmentData.departmentName,
                },
                {
                  icon: <FaCalendarAlt />,
                  label: "Date",
                  value: appointmentData.appointmentDate,
                },
                { icon: <FaPhone />, label: "Contact", value: appointmentData.phone },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4  flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <FaRupeeSign />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Consultation Fee</p>
                  <p className="text-xl font-bold text-green-600">
                    ₹{appointmentData.paymentAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

            <div className=" mb-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* ONLINE */}
              <button
                onClick={() => setPaymentMethod("online")}
                className={`relative w-full p-5 rounded-xl border-2 text-left transition
                  ${
                    paymentMethod === "online" ? "border-green-500 bg-green-50" : "border-gray-200"
                  }`}
              >
                {paymentMethod === "online" && (
                  <FaCheckCircle className="absolute top-4 right-4 text-green-500" />
                )}
                <FaCreditCard className="text-green-600 text-xl mb-2" />
                <h3 className="font-semibold">Online Payment</h3>
                <p className="text-sm text-gray-600">UPI / Card / Net Banking</p>
              </button>

              {/* HOSPITAL */}
              <button
                onClick={() => setPaymentMethod("hospital")}
                className={`relative w-full p-5 rounded-xl border-2 text-left transition
                  ${
                    paymentMethod === "hospital"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
              >
                {paymentMethod === "hospital" && (
                  <FaCheckCircle className="absolute top-4 right-4 text-green-500" />
                )}
                <FaMoneyBillWave className="text-green-600 text-xl mb-2" />
                <h3 className="font-semibold">Pay at Hospital</h3>
                <p className="text-sm text-gray-600">Pay during visit</p>
              </button>
            </div>

            {/* CTA */}

            <div className="flex flex-col gap-3 items-center justify-center">
              <button
                type="button"
                disabled={!paymentMethod}
                onClick={handleConfirmation}
                className={`w-full px-4 py-4 rounded-xl text-white font-semibold transition
      ${paymentMethod ? "bg-green-600 hover:bg-green-700" : "bg-gray-300 cursor-not-allowed"}`}
              >
                {paymentMethod === "online"
                  ? "Proceed to Pay"
                  : paymentMethod === "hospital"
                    ? "Confirm Appointment"
                    : "Select Payment Method"}
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 text-sm text-gray-600 hover:text-gray-900"
              >
                <FaHome /> Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
