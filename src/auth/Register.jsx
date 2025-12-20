import { useState } from "react";
import logo from "../assets/logo/logo.png";
import leftImage from "../assets/hospitals/hospital.jpg"; // background image
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
// !-------------
import { registerSchema } from "../utils/validationSchema";
import { useForm } from "../hooks/custom/useForm";

export const Register = () => {
  const [touchedField, setTouchedField] = useState({}); //  tracking user interaction
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBlur = (e) => {
    setTouchedField({ ...touchedField, [e.target.name]: true });
  };

  const initialValue = {
    username: "",
    email: "",
    password: "",
    role:"user"
  };

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.message || "Internal Server Error");
      }

      if (jsonResponse.status) {
        toast.success(jsonResponse.message);
        resetForm();
        navigate(`../verify-email/${value.email}`);
      } else {
        toast.error(jsonResponse.message);
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const { value, errors, handleChange, handleSubmit, resetForm } = useForm(
    initialValue,
    registerSchema,
    onSubmit
  );

  // check if user logged in redirect home page
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white p-8 relative overflow-y-auto max-h-screen">
        <div className="w-full max-w-lg animate-fadeIn overflow-y-auto max-h-screen hide-scrollbar">
          {/* Heading */}

          <div className="p-2">
            <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 tracking-tight">
              Create Your Patient Account
            </h1>
            <p className="text-gray-600 mt-1 mb-4">
              Register to securely access medical records, appointments and more.{" "}
              <span className="md:hidden block">
                if you have an account please{" "}
                <NavLink to={"../"} className="text-blue-700 underline">
                  Login{" "}
                </NavLink>
              </span>
            </p>
            <hr className="border-blue-200" />
          </div>
          {/* Form */}
          <form className="flex flex-col gap-4 p-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-sm font-medium text-zinc-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={value.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.username && errors.username && (
                <span className="text-red-500 text-sm px-2">{errors.username}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={value.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.email && errors.email && (
                <span className="text-red-500 text-sm px-2">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-zinc-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={value.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.password && errors.password && (
                <span className="text-red-500 text-sm px-2">{errors.password}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-lg shadow transition 
              ${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-linear-to-r from-green-500 to-green-400 hover:shadow-lg cursor-pointer"
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-2 justify-center text-green-700">
                  <LuLoaderCircle className="animate-spin w-6 h-6 " />
                  Registering...
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>

          <div className="text-center mt-6 text-xs text-zinc-500">
            {/* social login  */}

            <div className="flex items-center gap-3 mt-6 mb-6">
              <div className="flex-1 h-0.5 bg-zinc-200 rounded-full"></div>
              <span className="text-zinc-500 text-sm font-medium">or continue with</span>
              <div className="flex-1 h-0.5 bg-zinc-200 rounded-full"></div>
            </div>

            <div className="flex items-center justify-center gap-10">
              <button className="bg-zinc-100 hover:bg-zinc-200 px-3 py-3 text-3xl rounded cursor-pointer">
                <FcGoogle />
              </button>

              <button className="bg-zinc-100 hover:bg-zinc-200 px-3 py-3 text-3xl rounded text-blue-600 cursor-pointer">
                <FaFacebookSquare />
              </button>
            </div>
          </div>

          {/* legal notice  */}
          <p className="text-sm text-zinc-500 mt-3 text-center md:text-left">
            By registering, you agree to our{" "}
            <a href="/privacy-policy" className="text-blue-500  hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-blue-500 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative hidden md:block">
        <div className="relative w-full h-screen flex items-center justify-center">
          <img
            src={leftImage}
            alt="hospital"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-green-900/70 flex flex-col justify-center items-center  p-8"></div>

          {/* Main Content */}
          <div className="relative max-w-3xl text-center px-6">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                <img src={logo} alt="Hospital Logo" className="h-12  mx-auto" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
              Welcome to <span className="text-5xl font-extrabold text-orange-500 ">M</span>
              <span className="text-5xl font-extrabold text-teal-500 ">edi</span>
              <span className="text-5xl font-extrabold text-orange-500 ">C</span>
              <span className="text-5xl font-extrabold text-teal-500 ">are</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed">
              Your trusted health companion — book appointments, store medical records, chat with
              doctors, and monitor your wellness journey securely in one app.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <NavLink
                to={"/auth/login"}
                className="px-8 py-3 rounded-full  text-white font-semibold hover:bg-white/20 transition bg-blue-500"
              >
                Already have an account?
              </NavLink>
            </div>

            {/* Footer small info */}
            <p className="mt-6 text-sm text-white/70">Secure • Trusted by 10,000+ patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};
