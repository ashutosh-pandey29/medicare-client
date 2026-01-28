import {
  FaPrint,
  FaHospital,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdCard,
} from "react-icons/fa";

export const AppointmentSlip = ({ appointmentData, paymentInfo = null }) => {
  return (
    <div className="bg-white p-1 hidden  print:block">
      {/* Appointment Slip */}
      <div className="max-w-4xl mx-auto ">
        {/* Header */}
        <div className="border-b-4 border-blue-600 p-4">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <FaHospital className="text-3xl" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Medicare Hospital</h1>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  Sector 12, Near Metro Station New Delhi, India - 110034
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaPhone className="text-blue-600" />
                    1200-321-3783
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEnvelope className="text-blue-600" />
                    support@medicare.com
                  </span>
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <p className="text-lg text-gray-600 font-medium ">
                  <span className=" text-blue-600 font-semibold">Appointment ID :</span>{" "}
                  {appointmentData?.appointmentId}
                </p>
                <p className="text-lg text-gray-600 font-medium">
                  <span className=" text-blue-600 font-semibold">Token No. : </span>0
                  {appointmentData?.token}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="bg-blue-50 px-6 py-2 md:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800">
            APPOINTMENT SLIP
          </h2>
        </div>

        {/* Body - Patient & Appointment Details */}
        <div className="p-6 md:p-8">
          {/* Patient Information */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
              <FaUser className="text-blue-600" />
              Patient Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <p className="text-base font-semibold text-gray-800">Patient Name</p>
                <p className="text-base text-gray-600">{appointmentData?.name}</p>
              </div>
              <div>
                <p className="text-base font-semibold text-gray-800">Age / Gender</p>
                <p className="text-base text-gray-600 ">
                  {appointmentData?.age || "-"} / {appointmentData?.gender || "-"}
                </p>
              </div>
              <div>
                <p className="  text-base font-semibold text-gray-800">Phone Number</p>
                <p className="text-sm text-gray-600">{appointmentData?.phone}</p>
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
              <FaCalendarAlt className="text-blue-600" />
              Appointment Details
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <p className=" text-base font-semibold text-gray-800">Doctor Name</p>
                <p className="text-base text-gray-600">{appointmentData?.doctorName}</p>
              </div>
              <div>
                <p className="  text-base font-semibold text-gray-800">Department</p>
                <p className="text-sm text-gray-600">{appointmentData?.departmentName}</p>
              </div>
              <div>
                <p className=" text-base font-semibold text-gray-800">Appointment Date</p>
                <p className="text-sm text-gray-600">{appointmentData?.appointmentDate}</p>
              </div>
            </div>
          </div>

          {/* Important Note Box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-3 rounded-md">
            <p className="text-sm font-semibold text-gray-800 mb-3">Payment Status</p>

            {paymentInfo !== null ? (
              paymentInfo
            ) : (
              <div className="flex items-center justify-between mb-2">
                <p className="text-base font-medium text-gray-700">
                  Amount:{" "}
                  <span className="font-semibold text-gray-900">
                    ₹{appointmentData?.paymentAmount}
                  </span>
                </p>

                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full
        ${
          appointmentData.paymentStatus === "paid"
            ? "bg-green-100 text-green-700"
            : appointmentData.paymentStatus === "pending"
              ? "bg-orange-100 text-orange-700"
              : appointmentData.paymentStatus === "failed"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700"
        }`}
                >
                  {appointmentData?.paymentStatus?.toUpperCase()}
                </span>
              </div>
            )}

            <p className="text-sm text-gray-600">
              {appointmentData?.paymentStatus === "paid" &&
                "Payment completed successfully. Please carry your appointment slip."}

              {appointmentData?.paymentStatus === "pending" &&
                "Payment is pending. Kindly complete the payment before your appointment."}

              {appointmentData?.paymentStatus === "failed" &&
                "Payment failed. Please retry to confirm your appointment."}
            </p>
          </div>
        </div>

        {/* Footer - Instructions */}
        <div className="border-t-2 border-gray-200 bg-gray-50 p-6 md:p-8 ">
          <h3 className="text-base font-bold text-gray-800 mb-3">Instructions for Patient:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>
                Please bring this appointment slip along with a valid photo ID proof (Aadhaar Card,
                PAN Card, Driving License, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>
                Arrive at least 15 minutes before your scheduled appointment time for registration.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>
                Bring all previous medical records, prescriptions, and test reports related to your
                condition.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>
                If you need to cancel or reschedule, please inform us at least 24 hours in advance.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">5.</span>
              <span>For any queries, contact us at phone</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 pt-4  text-center border-t border-t-zinc-100">
          <p className="text-xs text-gray-600">
            This is a computer-generated slip and does not require a signature.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Printed on:{" "}
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
