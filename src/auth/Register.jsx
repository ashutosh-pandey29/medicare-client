import { useEffect, useState } from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
// !-------------
import { registerSchema } from "../utils/validationSchema";
import { useRegister } from "../hooks/auth/useRegister";
import { useForm } from "../hooks/custom/useForm";
import { useAuth } from "../context/AuthContext";

export const Register = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const { register, loading } = useRegister();

  const { values, setValues, errors, setErrors, handleChange, validateOnSubmit, resetForm } =
    useForm(
      {
        username: "",
        email: "",
        password: "",
      },
      registerSchema
    );

  // if register / login restrict user to open orm

  useEffect(() => {
    if (!user) return;
    const redirect = {
      user: "/",
      doctor: "/dashboard/doctor",
      admin: "/dashboard/admin",
    };
    navigate(redirect[user.role] || "/unauthorized");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate data on submit
    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    // submit data  => calling api

    const response = await register(values, setErrors);
    if (response.success) {
      resetForm();
      toast.success(response.message);
      navigate(`../verify-email-reminder`, { state: { email: values.email } });
    }
  };

  return (
    <div className="max-w-md w-full mx-auto border border-gray-300 rounded p-5  bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          <span className="text-4xl font-bold text-orange-500">M</span>
          <span className="text-3xl font-semibold text-zinc-500">edi</span>
          <span className="text-4xl font-bold text-orange-500">C</span>
          <span className="text-3xl font-semibold text-zinc-500">are</span>{" "}
          <span className="text-3xl font-semibold text-zinc-500">Hospital</span>
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Secure registration to access Medicare Hospital services
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="example123"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <span className="text-sm text-red-700">{errors.username}</span>}
          </div>

          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
            <input
              name="email"
              type="text"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="example@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-sm text-red-700">{errors.email}</span>}
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="********"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <span className="text-sm text-red-700">{errors.password}</span>}
          </div>
        </div>

        <div className="mt-8">
          <div className="mt-8">
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

                  <span>Creating account...</span>
                </>
              ) : (
                "Create an account"
              )}
            </button>
          </div>
        </div>

        <div className="my-6 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-slate-600 text-center">or</p>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 text-sm font-medium rounded-md text-slate-700 bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* instagram login  */}
          {/* <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 text-sm font-medium rounded-md text-slate-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#FED373", stopOpacity: 1 }} />
                    <stop offset="15%" style={{ stopColor: "#F15245", stopOpacity: 1 }} />
                    <stop offset="40%" style={{ stopColor: "#D92E7F", stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: "#9B36B7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#515ECF", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Continue with Instagram
            </button> */}

          {/* linkedin login */}
          {/* <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 text-sm font-medium rounded-md text-slate-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Continue with LinkedIn
            </button> */}
        </div>

        <p className="text-slate-600 text-sm mt-6 text-center">
          Already have an account?{" "}
          <NavLink to={"../login"} className="text-blue-600 font-medium hover:underline ml-1">
            Login here
          </NavLink>
        </p>
      </form>
    </div>
  );
};
