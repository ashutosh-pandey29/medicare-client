import { FaTimesCircle, FaRedoAlt, FaHome } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const appointmentId = params.get("appointmentId");
  const reason = params.get("reason") || "Payment could not be completed";

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center">
        {/* Icon */}
        <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Payment Failed</h1>

        {/* Message */}
        <p className="text-gray-600 mt-2">{reason}</p>

        {/* Appointment Info */}
        {appointmentId && (
          <p className="mt-3 text-sm text-gray-500">
            Appointment ID: <span className="font-semibold">{appointmentId}</span>
          </p>
        )}

        {/* Warning Box */}
        <div className="mt-5 bg-red-100 text-red-700 text-sm rounded-lg p-3">
          Please do not refresh the page. If amount was deducted, it will be refunded within 7–15
          working days.
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            <FaRedoAlt /> Retry Payment
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition"
          >
            <FaHome /> Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
