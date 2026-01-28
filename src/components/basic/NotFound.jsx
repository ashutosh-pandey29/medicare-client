import React from "react";

export const NotFound = ({
  message = "Data Not Found",
  description = "There are no Data to display at the moment",
  actionText = "",
  theme = "light", // "light" or "dark"
  onClick,
}) => {
  return (
    <div className={`rounded-md shadow mt-6 p-10 ${theme === "dark" ? "bg-gray-900 " : "bg-white"}`}>
      <div className="w-full text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Icon */}
          <div className="relative group">
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center shadow-xl transform transition-transform duration-500 group-hover:scale-110 ${
                theme === "dark"
                  ? "bg-linear-to-br from-gray-800 to-gray-900"
                  : "bg-linear-to-br from-gray-200 to-gray-300"
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <svg
                className={`w-14 h-14 relative z-10 transform transition-all duration-500 group-hover:scale-110 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-700"
                }`}
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
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <h3
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {message}
            </h3>
            <p className={`text-sm px-4 ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>
              {description}
            </p>
          </div>

          {/* Button */}
          {onClick && (
            <button
              onClick={onClick}
              className={`px-8 py-3 rounded-lg font-medium cursor-pointer text-white bg-linear-to-r ${
                theme === "dark"
                  ? "from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
                  : "from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400"
              }`}
            >
              {actionText}
            </button>
          )}

          
        </div>
      </div>
    </div>
  );
};
