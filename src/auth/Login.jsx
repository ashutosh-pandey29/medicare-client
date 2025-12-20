import logo from "../assets/logo/logo.png";
import leftImage from "../assets/hospitals/hospital.jpg"; // background image
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { LuLoaderCircle } from "react-icons/lu";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "../hooks/custom/useForm";
import { loginSchema } from "../utils/validationSchema";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [touchedField, setTouchedField] = useState({}); //  tracking user interaction
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleBlur = (e) => {
    setTouchedField({ ...touchedField, [e.target.name]: true });
  };

  const initialValue = {
    login_id: "",
    password: "",
  };

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
        credentials: "include",
      });

      // console.log(response);

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.message || "Internal server error");
      }

      if (jsonResponse.status) {
        toast.success(jsonResponse.message);

        // Save token to auth context
        const token = jsonResponse.data.accessToken;
        login(token);

        //Decode token to get role
        const decodedData = jwtDecode(token);

        //redirect  based on role
        const redirectionRoutes = {
          user: "/dashboard/user",
          doctor: "/dashboard/doctor",
          admin: "/dashboard/admin",
        };
        navigate(redirectionRoutes[decodedData.role] || "/");
      } else {
        toast.error(jsonResponse.message);
      }
    } catch (err) {
      toast.error(err.message || "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  const { value, errors, handleChange, handleSubmit, resetForm } = useForm(
    initialValue,
    loginSchema,
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
        <div className="w-full max-w-md animate-fadeIn ">
          <div>
            <div className="mb-6 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-gray-600 mt-2">
                Sign in to access your appointments, medical records, and more.
                <span className="md:hidden block">
                  if you have no account please{" "}
                  <NavLink to={"/auth/register"} className="text-blue-700 underline">
                    Register{" "}
                  </NavLink>
                </span>
              </p>
              <hr className="border-blue-200 mt-4" />
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="login_id" className="text-sm font-medium text-zinc-700 mb-1">
                Email / Username
              </label>
              <input
                type="text"
                id="login_id"
                name="login_id"
                placeholder="Enter your email or username"
                className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={value.login_id}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.login_id && errors.login_id && (
                <span className="text-red-500 text-sm px-2">{errors.login_id}</span>
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

            <div className="text-right text-sm mb-2">
              <a href="#" className="text-green-500 hover:underline">
                Forgot Password?
              </a>
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
                  Logging...
                </div>
              ) : (
                "Login"
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
                to={"/auth/register"}
                className="px-8 py-3 rounded-full  text-white font-semibold hover:bg-white/20 transition bg-blue-500"
              >
                have no account?
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
