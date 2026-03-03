import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {
  FaMoneyBillWave,
  FaHospital,
  FaUserMd,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PreLoader } from "../../components/UI/loaders/PreLoader";
import { AppointmentSlip } from "../../components/invoice-slips/AppointmentSlip";
import { useAppointment } from "../../hooks/appointment/useAppointment";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const VALID_PAYMENT_MODE = ["online", "hospital"];
  const appointmentId = params.get("appointmentId");
  const receivedMode = params.get("mode");
  const { loading, fetchAppointmentById } = useAppointment();
  const paymentMode = VALID_PAYMENT_MODE.includes(receivedMode)
    ? receivedMode
    : navigate("/unexpected-error");

  // fetch all detail using appointment id
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      const response = await fetchAppointmentById(appointmentId);

      console.log(response);
      if (response.success) {
        setAppointmentData(response.data);
      }
    };
    if (appointmentId) {
      fetchAppointmentData();
    }
  }, []);

  // handling slip print

  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Appointment_${appointmentData?.appointmentId}`,
    onAfterPrint: () => {
      console.log("Print completed");
    },
  });

  console.log(appointmentData);

  if (loading && !appointmentData) {
    return <PreLoader />;
  }

  //

  const paymentInfo =
    paymentMode === "online" ? (
      <>
        Your online payment of{" "}
        <span className="font-bold text-lg">₹{appointmentData?.paymentAmount}</span> has been
        completed successfully. Your appointment is fully confirmed and no further payment is
        required at the hospital.
      </>
    ) : (
      <>
        You need to pay <span className="font-bold text-lg">₹{appointmentData?.paymentAmount}</span>{" "}
        in cash at the hospital reception counter. Your appointment will be confirmed only after the
        payment is completed.{" "}
        <strong>
          If payment is not made within 24 hours, the appointment will be automatically canceled.
        </strong>
      </>
    );

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-amber-50 flex items-center justify-center md:p-4 ">
        <div className="max-w-2xl w-full bg-white rounded  overflow-hidden page-container">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 via-blue-500 to-teal-500 text-white px-6 py-6 md:py-8 rounded-t-xl text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
              Appointment Booked Successfully🎉
            </h1>
            <p className="text-sm md:text-base text-white/90 mt-1">
              Thank you for choosing our healthcare services
            </p>
          </div>

          {/* Main Content */}
          <div className="p-1 md:p-4">
            {/* Important Alert */}

            <div className="bg-amber-100 border-l-4 border-amber-500 p-1 md:p-2 mb-6 rounded-r-lg">
              {/* icon + title */}
              <div className="flex items-center mb-1  ">
                {" "}
                {paymentMode == "hospital" ? (
                  <IoMdAlert className="text-amber-600 text-3xl mr-3 shrink-0 mt-1 animate-pulse" />
                ) : (
                  <FaCheckCircle className="text-3xl mr-3 shrink-0 mt-1 text-green-600 animate-pulse" />
                )}
                <h3 className="font-bold text-amber-900 text-lg ">
                  Payment {paymentMode == "hospital" ? "Pending" : "Success"}
                </h3>
              </div>

              <p className="text-amber-800 text-sm leading-relaxed">{paymentInfo}</p>
            </div>

            {/* Booking ID & Token */}
            <div className="bg-gray-100 rounded-xl p-4 md:p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
                {/* Appointment ID */}
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Appointment ID
                  </p>
                  <p className="text-gray-900 font-bold text-2xl md:text-3xl tracking-wider">
                    {appointmentData?.appointmentId || "-"}
                  </p>
                  <p className="text-gray-500 text-xs mt-2 max-w-xs mx-auto">
                    {paymentMode === "hospital"
                      ? "Show this ID at the reception counter to complete payment."
                      : "Keep this ID safe for future reference."}
                  </p>
                </div>

                {/* Divider (desktop only) */}
                <div className="hidden md:flex justify-center">
                  <div className="w-px h-20 bg-gray-300" />
                </div>

                {/* Token Number */}
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Token Number</p>
                  <p className="text-gray-900 font-bold text-2xl md:text-3xl tracking-wider">
                    {appointmentData?.token ? `0${appointmentData?.token}` : "-"}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">Token number may change at hospital</p>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaCalendarCheck className="mr-2 text-orange-600" />
                Appointment Details
              </h2>

              <div className="bg-gray-50 rounded-lg p-5 space-y-4">
                <div className="flex items-start">
                  <FaHospital className="text-blue-600 mt-1 mr-3 text-xl shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm">Hospital Name</p>
                    <p className="text-gray-900 font-semibold">Medicare Hospital </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-red-600 mt-1 mr-3 text-xl shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm">Address</p>
                    <p className="text-gray-900 font-semibold">
                      Sector 12, Near Metro Station New Delhi, India - 110034
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4"></div>

                <div className="flex items-start">
                  <FaUserMd className="text-teal-600 mt-1 mr-3 text-xl shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm">Doctor</p>
                    <p className="text-gray-900 font-semibold">{appointmentData?.doctorName}</p>
                    <p className="text-gray-600 text-xs">{appointmentData?.departmentName}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCalendarCheck className="text-green-600 mt-1 mr-3 text-xl shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm">Appointment Date</p>
                    <p className="text-gray-900 font-semibold">
                      {appointmentData?.appointmentDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Amount */}
            <div className="bg-linear-to-r from-orange-100 to-amber-100 border-2 border-orange-300 rounded-lg p-5 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaMoneyBillWave className="text-orange-600 text-3xl mr-3" />
                  <div>
                    <p className="text-gray-700 text-sm">Consultation Fee</p>
                    <p className="text-gray-900 font-bold text-2xl">
                      ₹{appointmentData?.paymentAmount}
                    </p>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-orange-300">
                  <p className="text-orange-600 font-bold text-sm">
                    {appointmentData?.paymentStatus}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                <FaInfoCircle className="mr-2" />
                Important Instructions
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                  <span>
                    Please arrive <strong>15 minutes before</strong> your scheduled appointment time
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                  <span>
                    Show your <strong>booking ID</strong> at the reception counter and make the
                    payment
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                  <span>
                    Bring a <strong>valid ID proof</strong> and any previous medical records
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                  <span>
                    You will receive a <strong>token number</strong> after payment confirmation
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 no-print">
              <button
                onClick={() => navigate("/dashboard/user/")}
                className="flex-1 bg-blue-100 hover:bg-blue-200 text-black font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
              >
                back to Home
              </button>

              <button
                onClick={() => handlePrint()}
                disabled={!appointmentData}
                className={`flex-1 font-bold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300
                ${
                  !appointmentData
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                }`}
              >
                <MdPrint className="mr-2 text-xl" />
                Print Slip
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={printRef}>
        <AppointmentSlip appointmentData={appointmentData} paymentInfo={paymentInfo} />
      </div>
    </>
  );
};
