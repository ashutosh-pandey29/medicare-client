import logo from "../assets/logo/logo.png";
import leftImage from "../assets/hospitals/hospital.jpg"; // background image
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";

export const Register = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white p-8 relative overflow-y-auto max-h-screen">
        <div className="w-full max-w-lg animate-fadeIn overflow-y-auto max-h-screen hide-scrollbar">
          {/* Logo */}
          <img src={logo} alt="Hospital Logo" className="h-12 mb-6 mx-auto" />

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-green-700 mb-2 text-center">
            Welcome to Medicare!
          </h1>
          <p className="text-zinc-600 mb-6 text-center">
            If you Have an account , please <NavLink to="register" className="text-blue-500 hover:underline font-semibold px-1">
              Login</NavLink>Securely access your appointments and records.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="login_id" className="text-sm font-medium text-zinc-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="login_id" className="text-sm font-medium text-zinc-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your username"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="login_id" className="text-sm font-medium text-zinc-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="login_id"
                placeholder="Enter your email"
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

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-zinc-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="c-password"
                placeholder="Re-Enter your password"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="text-left text-sm mb-2 flex items-center  gap-3 content-center">
              <input type="checkbox" name="a" id="a" />
              <label htmlFor="a">Accept term and condition</label>
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
        <div className="absolute inset-0 bg-green-900/70 flex flex-col justify-center items-center  p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to MediCare!</h2>
          <p className="text-white opacity-90 text-lg md:text-xl">
            Start your health journey with us! Create your account to securely access your
            appointments, manage your medical records, consult doctors, and stay updated on all your
            hospital activities—all in one place. Your health and convenience are our top priority.
            <p>Sign up now and take the first step toward hassle-free healthcare!</p>
          </p>
        </div>
      </div>
    </div>
  );
};
