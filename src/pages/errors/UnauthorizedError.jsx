import React from "react";
import { FaLock, FaHome, FaSignInAlt, FaShieldAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const UnauthorizedError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-100 rounded-full animate-pulse"></div>
            <div className="relative flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full">
              <FaLock className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-2">401</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Unauthorized Access</h2>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-2">
            You don't have permission to access this page.
          </p>
          <p className="text-base text-gray-500">
            Please log in with the appropriate credentials or contact your administrator for access.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-start text-left mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 mr-4 shrink-0">
              <FaShieldAlt className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Why am I seeing this?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>You're not logged in to your account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Your session may have expired</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>You don't have the required permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>This page is restricted to authorized users only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            onClick={() => navigate("/auth/login")}
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow"
          >
            <FaSignInAlt className="w-4 h-4 mr-2" />
            Login to Continue
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <FaHome className="w-4 h-4 mr-2" />
            Go to Homepage
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center text-orange-700">
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
