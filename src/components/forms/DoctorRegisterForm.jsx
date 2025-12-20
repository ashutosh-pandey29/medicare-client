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
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold bg-linear-to-r from-green-500 to-purple-500 text-transparent bg-clip-text">
          Add New Doctor
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Please register the member first, then proceed to fill in their personal and professional
          details.
        </p>
      </div>

      {/* ---------------- Basic Info ---------------- */}
      <div className="bg-white p-5 shadow rounded mb-8">
        <h2 className="text-lg font-semibold border-b border-zinc-300 pb-2 mb-3">
          Register Member
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-600">Username:</label>
              <input
                className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none"
                name="username"
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.username && errors.username && (
                <span className="text-red-500 text-sm px-2">{errors.username}</span>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Email:</label>
              <input
                className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.email && errors.email && (
                <span className="text-red-500 text-sm px-2">{errors.email}</span>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Password:</label>
              <div className="flex gap-2 mt-1">
                <input
                  placeholder="Generate password..."
                  className="border border-zinc-300 w-full h-10 px-3 rounded outline-none"
                  name="password"
                  id="password"
                  value={value.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className="w-12 flex justify-center items-center border border-zinc-300 rounded hover:bg-orange-500 hover:text-white transition"
                  onClick={handleGeneratePassword}
                >
                  <FaArrowsRotate />
                </button>
              </div>
              {touchedField.password && errors.password && (
                <span className="text-red-500 text-sm px-2">{errors.password}</span>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Role:</label>
              <select
                className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none"
                name="role"
                id="role"
                value={value.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value={""}>Select Role</option>
                <option value={"doctor"}>Doctor</option>
              </select>
            </div>
          </div>

          <div className="text-right mt-5">
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
          </div>
        </form>
      </div>
    </div>
  );
};
