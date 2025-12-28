import React, { useEffect, useState } from "react";
import { FaClock, FaDownload } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

export const DownloadTimerModal = ({ duration = 10 , onClose}) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    setSeconds(duration);

    const timeInterval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timeInterval);
          return 0; // stop at 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [duration]);

  // Auto close when timer hits 0
  useEffect(() => {
    if (seconds === 0 ) {
      onClose();
    }
  }, [seconds]);

  return (
    <>
      <div className=" w-full p-8 bg-white ">
        <div className="flex flex-col items-center text-center">
          {/* Timer Circle */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-200">
              <span className="text-3xl font-semibold text-blue-600 tabular-nums">{seconds}</span>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-ping opacity-20"></div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Preparing your report</h3>

          {/* Message */}
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
            Please wait while we securely generate your medical report. The download will start
            automatically.
          </p>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear"
              style={{ width: `${((duration - seconds) / duration) * 100}%` }}
            />
          </div>

          {/* Footer Text */}
          <p className="mt-3 text-xs text-gray-400">Do not close this window</p>
        </div>
      </div>
    </>
  );
};
