import React, { useState } from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { useForm } from "../hooks/custom/useForm";
import { resetPasswordSchema } from "../utils/schema/auth.validation";
import { useResetPassword } from "../hooks/auth/useResetPassword";
import { toast } from "react-toastify";

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const initialValue = {
    password: "",
    confirmPassword: "",
  };

  const { values, setValues, errors, setErrors, handleChange, validateOnSubmit, resetForm } =
    useForm(initialValue, resetPasswordSchema);
  const { loading, resetPassword } = useResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    try {
      const payload = {
        token,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      const response = await resetPassword(payload);

      if (response.success) {
        toast.success(response.message || "Password reset successful, login to continue...");
        resetForm();
        setTimeout(() => {
          navigate("/auth/login");
        }, 1500);
      }
    } catch (err) {
      console.log(err);
          toast.error(err.message || "Password reset failed");

    }
  };

  return (
    <div className="flex items-center justify-center px-4 min-h-screen">
      <div className="bg-white shadow rounded p-8 w-full max-w-md">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <FaLock size={24} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">Reset Password</h2>

        <p className="text-sm text-gray-500 text-center mt-2">Enter your new password below.</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full rounded-lg border outline-0 border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <span className="text-sm text-red-600">{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className="w-full outline-0 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-600">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
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

                <span>Updating Password</span>
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-6">
          Back to{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};
