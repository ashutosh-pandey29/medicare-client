import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { GoXCircleFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setLoading(false);
        setMessage("Invalid verification link.");
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify?token=${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const jsonResponse = await response.json();

        if (!response.ok) {
          throw new Error(jsonResponse.message || "Internal Server Error");
        }
        if (jsonResponse.status) {
          setMessage(jsonResponse.message);
          setIsSuccess(true);
        } else {
          setMessage(jsonResponse.message);
        }
      } catch (err) {
        setMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          {loading ? (
            <div className="text-center space-y-6">
              {/* Animated Mail Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <MdEmail className="w-20 h-20 text-indigo-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
                  </div>
                </div>
              </div>

              {/* Loading Text */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-800">Verifying Your Email</h2>
                <p className="text-gray-600">Please wait while we verify your email address...</p>
              </div>

              {/* Animated Dots */}
              <div className="flex justify-center space-x-2">
                <div
                  className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              {/* Success/Error Icon */}
              <div className="flex justify-center">
                {isSuccess ? (
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                    <FaCheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                    <GoXCircleFill className="w-12 h-12 text-red-500" />
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="space-y-3">
                <h2
                  className={`text-2xl font-bold ${isSuccess ? "text-green-600" : "text-red-600"}`}
                >
                  {isSuccess ? "Verification Successful!" : "Verification Failed"}
                </h2>
                <p className="text-gray-600">{message}</p>
              </div>

              {/* Action Button */}

              {isSuccess ? (
                <NavLink
                  to={"/auth/login"}
                  className={`bg-green-500 hover:bg-green-600 w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200`}
                >
                  Continue to Login
                </NavLink>
              ) : (
                <button
                  className={` bg-red-500 hover:bg-red-600 w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 `}
                >
                  Try Again
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
