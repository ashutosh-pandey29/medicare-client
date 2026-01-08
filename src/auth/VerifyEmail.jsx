import { useEffect, useState } from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { GoXCircleFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { useVerifyEmail } from "../hooks/auth/useVerifyEmail";
import { toast } from "react-toastify";

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const { verifyEmail, loading } = useVerifyEmail();

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setIsSuccess(false);
        setMessage("Invalid or expired verification link.");
        return;
      }

      try {
        const response = await verifyEmail(token);
        setIsSuccess(true);
        setMessage(response?.message || "Email verified successfully");
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } catch (err) {
        setIsSuccess(false);
        console.log(err.message);
        setMessage(err?.message || "Email verification failed");
      }
    };
    verify();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded shadow p-8 max-w-md w-full">
        {loading ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center relative">
              <MdEmail className="w-20 h-20 text-indigo-500" />
              <div className="absolute w-24 h-24 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>

            <h2 className="text-2xl font-bold">Verifying Your Email</h2>
            <p className="text-gray-600">Please wait...</p>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              {isSuccess ? (
                <FaCheckCircle className="w-16 h-16 text-green-500" />
              ) : (
                <GoXCircleFill className="w-16 h-16 text-red-500" />
              )}
            </div>

            <h2 className={`text-2xl font-bold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
              {isSuccess ? "Verification Successful!" : "Verification Failed"}
            </h2>

            <p className="text-gray-600">{message}</p>

            {!isSuccess && (
              <button
                disabled={true}
                className="bg-red-500 hover:bg-red-600 w-full py-3 px-6 rounded-lg font-semibold text-white block"
              >
                Resend Verification Email
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
