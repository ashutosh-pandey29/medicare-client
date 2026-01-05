import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/custom/useForm";
import { useForgotPassword } from "../hooks/auth/useForgotPassword";
import { z } from "zod";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const forgotPasswordSchema = z.object({
    email: z.string().nonempty("Email is required").email("Please enter a valid email address"),
  });

  const { values, setValues, errors, setErrors, handleChange, validateOnSubmit, resetForm } =
    useForm({ email: "" }, forgotPasswordSchema);
  const { forgotPassword, loading } = useForgotPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    const response = await forgotPassword(values, setErrors);

    if (response?.success) {
      resetForm();
      toast.success(response.message.message);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center px-4">
        <div className="bg-white shadow rounded p-8 w-full max-w-md">
          {/* Icon */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaEnvelope size={26} />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>

          <p className="text-sm text-gray-500 text-center mt-2">
            Enter your registered email and we’ll send you a reset link.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-sm text-red-600">{errors.email}</span>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md 
      text-white bg-blue-600 hover:bg-blue-700 focus:outline-none
      flex items-center justify-center gap-2
      ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {loading ? (
                <>
                  {/* Loader */}
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>

                  <span>Sending reset link...</span>
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-center text-gray-400 mt-6">
            Remembered your password?{" "}
            <NavLink to="../login" className="text-blue-600 hover:underline font-medium">
              Back to login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
