import logo from "../assets/logo/logo.png";
import leftImage from "../assets/hospitals/hospital.jpg"; // background image
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white p-8 relative overflow-y-auto max-h-screen">
        <div className="w-full max-w-md animate-fadeIn ">
          {/* Logo */}
          <img src={logo} alt="Hospital Logo" className="h-12 mb-6 mx-auto" />

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2 text-center">
            Welcome Back!
          </h1>
          <p className="text-zinc-600 mb-6 text-center">
            If you are new, please
            <NavLink to="register" className="text-blue-500 hover:underline font-semibold px-2">
              register
            </NavLink>
            . Securely access your appointments and records.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="login_id" className="text-sm font-medium text-zinc-700 mb-1">
                Email / Username
              </label>
              <input
                type="text"
                id="login_id"
                placeholder="Enter your email or username"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-zinc-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="text-right text-sm mb-2">
              <a href="#" className="text-green-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-green-500 to-green-400 text-white font-semibold rounded-lg shadow hover:shadow-lg transition"
            >
              Login
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
              <button className="bg-zinc-100 hover:bg-zinc-200 px-3 py-3 text-3xl rounded">
                <FcGoogle />
              </button>

              <button className="bg-zinc-100 hover:bg-zinc-200 px-3 py-3 text-3xl rounded text-blue-600">
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
        <img src={leftImage} alt="Hospital" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-green-900/70 flex flex-col justify-center items-center text-center p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome Back!</h2>
          <p className="text-white opacity-90 text-lg md:text-xl">
           Take full control of your health journey from a single secure platform. Access your appointments, view and manage your medical records, consult your doctors, and stay updated on your hospital activities—all in one place. Your health and convenience are our top priority.
          </p>

          
        </div>
      </div>
    </div>
  );
};
