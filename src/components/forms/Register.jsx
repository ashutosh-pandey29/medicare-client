import React from "react";
import { FaArrowLeft, FaArrowsRotate } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/auth/useRegister";
import { useForm } from "../../hooks/custom/useForm";
import { registerSchema } from "../../utils/validationSchema";
import { toast } from "react-toastify";
import { BiLoader } from "react-icons/bi";

const Register = () => {
  const navigate = useNavigate();
  const { loading, register } = useRegister();
  const { values, setValues, errors, setErrors, handleChange, validateOnSubmit, resetForm } =
    useForm(
      {
        username: "",
        email: "",
        password: "",
        role: "",
      },
      registerSchema
    );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate data on submit
    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    // submit data  => calling api

    const response = await register(values, setErrors);
    if (response.success) {
      resetForm();
      toast.success("Doctor Registered successfully.");
        resetForm();
      navigate(-1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-1 rounded md:p-6 bg-gray-900 text-gray-200">
      {/* Page Title */}
      <div className="flex items-center gap-3 border-b border-slate-700 pb-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-400 
    hover:text-white transition"
        >
          <FaArrowLeft />
          Back
        </button>

        <h1 className="text-xl font-semibold text-white">Register New Doctor</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= FORM ================= */}
        <form className="bg-gray-800 rounded-md shadow p-1 md:p-4 lg:p-6 space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Username</label>
            <input
              name="username"
              id="username"
              placeholder="example123"
              value={values.username}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 border-gray-700 
              bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
            />
            {errors.username && <span className="text-sm text-red-700">{errors.username}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Email</label>
            <input
              name="email"
              id="email"
              placeholder="example123@gmail.com"
              value={values.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 border-gray-700 
              bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
            />
            {errors.email && <span className="text-sm text-red-700">{errors.email}</span>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Password</label>
            <div className="flex gap-2 items-center">
              <input
                name="password"
                placeholder="*********"
                value={values.password}
                onChange={handleChange}
                className="flex-1 border rounded-md px-4 py-3 border-gray-700 
                bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
              <button
                type="button"
                title="Generate Password"
                className="w-10 h-10 flex items-center justify-center rounded-md
                bg-slate-800 border border-slate-600 text-slate-300
                hover:bg-green-600 hover:text-white transition"
              >
                <FaArrowsRotate />
              </button>
            </div>
            {errors.password && <span className="text-sm text-red-700">{errors.password}</span>}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Role</label>
            <select
              name="role"
              id="role"
              value={values.role}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 border-gray-700 
              bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-3 text-right">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 transition
              text-white px-4  py-2.5 rounded cursor-pointer"
            >
              {loading ? (
                <BiLoader className="animate-spin text-xl text-white" />
              ) : (
                "Register Doctor"
              )}
            </button>
          </div>
        </form>

        {/* ================= INSTRUCTIONS ================= */}
        <div className="bg-gray-800 rounded-md p-1 md:p-4 lg:p-6 text-sm text-slate-300 space-y-4">
          <h3 className="text-base font-semibold text-white border-b border-slate-600 pb-2">
            Instructions
          </h3>
          <ol className="list-decimal pl-4 space-y-2 text-slate-400">
            <li>Create a doctor account using basic login credentials only.</li>

            <li>Login credentials will be sent to the doctor’s registered email.</li>

            <li>Doctor completes profile details after first login.</li>

            <li>Admin reviews and approves the doctor profile.</li>

            <li>After approval, doctor becomes active and receives an official ID.</li>
          </ol>

        <div className="bg-red-950/40 border-l-4 border-red-600 rounded-md p-1 
text-xs text-red-200 leading-relaxed">
  <strong className="block mb-1 text-red-400">
    Important Password & Access Notice
  </strong>

  <ul className="list-disc pl-4 space-y-1">
    <li>
      The password entered during registration is used{" "}
      <strong className="text-red-300">
        only to create the doctor’s account
      </strong>.
    </li>

    <li>
      After email verification, the doctor will receive a{" "}
      <strong className="text-red-300">
        temporary login password
      </strong>{" "}
      via email.
    </li>

    <li>
      The doctor may{" "}
      <strong className="text-red-300">
        reset or change the password
      </strong>{" "}
      after logging in. If not changed, the temporary password remains active.
    </li>

    <li>
      For security reasons, the{" "}
      <strong className="text-red-300">
        admin-created password will never be reused
      </strong>{" "}
      after verification.
    </li>

    <li>
      <strong className="text-red-300">Admin Access:</strong> Admin can reset the
      doctor’s password and access the dashboard for verification or support.
    </li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default Register;
