import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const VerifyEmailReminder = () => {
  const [timer, setTimer] = useState(24 * 60 * 60); // 24 hours in seconds
  const { email } = useParams();
  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format seconds → hh:mm:ss
  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md text-center ">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">Verify Your Email</h2>

        {/* Info message */}
        <p className="text-gray-600 mt-2">
          We have sent a verification link to:
          <br />
          <span className="font-medium text-blue-600">{email}</span>
        </p>

        {/* Timer */}
        <p className="mt-4 text-sm text-gray-500">This link is valid for:</p>

        <div className="text-lg font-semibold text-gray-800 animate-pulse">{formatTime(timer)}</div>

        {/* Notice */}
        <p className="text-sm text-gray-500 mt-2">
          Please verify your account within <b>24 hours</b>, otherwise the link will expire.
        </p>

        {/* Action button */}
        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          Resend Verification Email
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-4">
          Didn’t receive the email? Check your spam folder.
        </p>
      </div>
    </div>
  );
};
