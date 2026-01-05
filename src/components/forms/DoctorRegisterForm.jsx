import { FaArrowsRotate } from "react-icons/fa6";
import { passwordGenerator } from "../../helper/passwordGenerator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/custom/useForm";
import { registerSchema } from "../../utils/validationSchema";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "react-toastify";
import { useToken } from "../../hooks/custom/useToken";
import { AdminPageHeading } from "../common/dashboard/heading/AdminPageHeading";
import { Button } from "../UI/Button";
import { FaRegAddressCard } from "react-icons/fa";

export const DoctorRegisterForm = () => {
  const [password, setPassword] = useState("");
  const [touchedField, setTouchedField] = useState({}); //  tracking user interaction
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = useToken();

  const handleBlur = (e) => {
    setTouchedField({ ...touchedField, [e.target.name]: true });
  };

  const handleGeneratePassword = () => {
    const newPassword = passwordGenerator(16);
    setPassword(newPassword);
    console.log(newPassword);
  };

  const initialValue = {
    username: "",
    email: "",
    password: "",
    role: "",
  };

  const onSubmit = async (value) => {
    setLoading(true);
    console.log(value);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
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
        navigate(`profile/${jsonResponse.data.userId}`);
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

  return (
    <>
      {/* Header */}
      <AdminPageHeading
        icon={FaRegAddressCard}
        title="Add Hospital Staff"
        subtitle="Create staff login credentials. Each staff member can log in, complete their profile, and manage their respective tasks from their dashboard based on their role."
      />

      <div className="sm:max-w-sm md:min-w-full mx-auto p-4 bg-gray-900  text-gray-200">
        {/* ================= Website Branding ================= */}
        <div className="bg-gray-800 rounded-md shadow p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5  pb-5">
              {/* Username */}
              <div>
                <label className="text-sm text-slate-400">Username</label>
                <input
                  className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touchedField.username && errors.username && (
                  <span className="text-red-400 text-sm">{errors.username}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-400">Email</label>
                <input
                  className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touchedField.email && errors.email && (
                  <span className="text-red-400 text-sm">{errors.email}</span>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-slate-400">Password</label>
                <div className="flex gap-2 mt-1">
                  <input
                    placeholder="Generate password..."
                    className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                    name="password"
                    id="password"
                    value={value.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <button
                    type="button"
                    onClick={handleGeneratePassword}
                    className="w-12 flex items-center justify-center rounded-md 
                       bg-slate-800 border border-slate-600 text-slate-300
                       hover:bg-green-500 hover:text-white transition"
                  >
                    <FaArrowsRotate />
                  </button>
                </div>
                {touchedField.password && errors.password && (
                  <span className="text-red-400 text-sm">{errors.password}</span>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="text-sm text-slate-400">Role</label>
                <select
                  className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  name="role"
                  id="role"
                  value={value.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select Role</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow
          ${
            loading
              ? "bg-green-700 cursor-not-allowed"
              : "bg-linear-to-r from-blue-500 to-blue-400 hover:shadow-lg"
          }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <LuLoaderCircle className="animate-spin w-5 h-5" />
                    Registering...
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
