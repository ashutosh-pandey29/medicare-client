import React from 'react';
import { FaExclamationTriangle, FaHome, FaRedo, FaHeadset } from 'react-icons/fa';

export default function ServerError() {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    // Navigate to home page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative flex items-center justify-center w-24 h-24 bg-red-100 rounded-full">
              <FaExclamationTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-2">500</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Internal Server Error
          </h2>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-2">
            Oops! Something went wrong on our end.
          </p>
          <p className="text-base text-gray-500">
            We're sorry for the inconvenience. Our team has been notified and is working to fix the issue.
          </p>
        </div>

        {/* Error Details Card (Optional) */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">What you can do:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Try refreshing the page</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Check your internet connection</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Wait a few minutes and try again</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Contact support if the problem persists</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRefresh}
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow"
          >
            <FaRedo className="w-4 h-4 mr-2" />
            Refresh Page
          </button>

          <button
            onClick={handleGoHome}
            className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <FaHome className="w-4 h-4 mr-2" />
            Go to Homepage
          </button>

          <button
            className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <FaHeadset className="w-4 h-4 mr-2" />
            Contact Support
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Error Code: <span className="font-mono font-semibold text-gray-700">ERR_500_INTERNAL</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Timestamp: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}