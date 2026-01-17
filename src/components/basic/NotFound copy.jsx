import React from "react";

export const NotFound = ({
  message = "Data Not Found",
  description = "There are no Data to display at the moment",
  actionText = "",
  theme="light",
  onClick,
}) => {

  
  return (
    <div className="bg-gray-900 rounded-md shadow-lg mt-6 p-10">
      <div className="w-full table-auto border-collapse text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Icon */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Animated Icon Container */}
            <div className="relative group">
              {/* Main Circle with gradient */}
              <div className="w-28 h-28 rounded-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-xl transform transition-transform duration-500 group-hover:scale-110">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                {/* Icon */}
                <svg
                  className="w-14 h-14 text-gray-500 relative z-10 transform transition-all duration-500 group-hover:text-gray-400 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              {/* Animated rings */}
              <div className="absolute inset-0 w-28 h-28 rounded-full border-2 border-gray-700 opacity-20 animate-ping"></div>
              <div className="absolute inset-0 w-28 h-28 rounded-full border border-gray-700 opacity-30 animate-pulse"></div>

              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>
              <div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full opacity-40 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="absolute top-0 -left-3 w-2.5 h-2.5 bg-indigo-500 rounded-full opacity-40 animate-bounce"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>

            {/* Text */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-200">{message}</h3>
              <p className="text-sm text-gray-500 px-4">{description}</p>
            </div>

            {/* Action */}
            {onClick && (
              <button
                onClick={onClick}
                className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-medium cursor-pointer"
              >
                {actionText}
              </button>
            )}

            <p className="text-xs text-gray-600">Get started by creating your first entry</p>
          </div>
        </div>
      </div>
    </div>
  );
};
