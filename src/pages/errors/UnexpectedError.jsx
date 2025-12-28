import { FaExclamationTriangle, FaUser } from "react-icons/fa";
import { FaHouseMedical } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const UnexpectedError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-100 rounded-full animate-pulse"></div>
            <div className="relative flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full">
              <FaExclamationTriangle className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-2">400</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Unexpected Error</h2>
        </div>

        {/* Error Message */}
        <div className="mb-8 md:w-lg mx-auto">
          <p className="text-base text-gray-500">
            The page you are trying to access is invalid or has been tampered with. Please navigate
            from a valid flow.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            onClick={() => navigate("/dashboard/user/appointments")}
            className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <FaHouseMedical className="w-4 h-4 mr-2" />
            Go to Homepage
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-center justify-center text-orange-700 ">
            <FaUser className="w-4 h-4 mr-2" />
            <p className="text-sm font-medium">
              Need help?{" "}
              <a href="/contact" className="underline hover:text-orange-800">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Error Code:{" "}
            <span className="font-mono font-semibold text-gray-700">ERR_401_UNAUTHORIZED</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">Timestamp: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
