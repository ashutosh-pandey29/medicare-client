import React, { useEffect, useState } from "react";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { FaEye, FaUserShield } from "react-icons/fa";
import { useAccount } from "../../hooks/auth/useAccount";
import { useModal } from "../../hooks/custom/useModal";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/custom/useForm";
import { accountUpdateSchema, passwordUpdateSchema } from "../../utils/schema/auth.validation";
import { Button } from "../../components/UI/Button";

export const Account = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { modalData, openModal, closeModal } = useModal();
  const { clearAuth } = useAuth();
  const { loading, myAccountInfo, updateAccount, updatePassword, deleteAccount } = useAccount();

  const accountInitialValues = {
    email: "",
    username: "",
  };

  const passwordInitialValue = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const accountForm = useForm(accountInitialValues, accountUpdateSchema);
  const passwordForm = useForm(passwordInitialValue, passwordUpdateSchema);

  // destructing
  const {
    values: accountValues,
    errors: accountErrors,
    handleChange: handleAccountChange,
    validateOnSubmit: validateAccount,
    resetForm: resetAccountForm,
    setValues: setAccountValues,
  } = accountForm;

  const {
    values: passwordValues,
    errors: passwordErrors,
    handleChange: handlePasswordChange,
    validateOnSubmit: validatePassword,
    resetForm: resetPasswordForm,
  } = passwordForm;

  const fetchAccount = async () => {
    const response = await myAccountInfo();
    console.log(response.data);
    setAccountValues(response.data);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const handleAccountUpdate = async (e) => {
    e.preventDefault();

    const formErrors = validateAccount(accountValues);
    if (Object.keys(formErrors).length > 0) return;

    try {
      const payload = {
        username: accountValues.username,
        email: accountValues.email,
      };

      const response = await updateAccount(payload);

      toast.success(response.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // update account password
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const formErrors = validatePassword(passwordValues);
    console.log(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    try {
      const payload = {
        oldPassword: passwordValues.oldPassword,
        newPassword: passwordValues.newPassword,
      };

      const response = await updatePassword(payload);
      toast.success(response.message);
      resetPasswordForm();

      // clear access token ;
      clearAuth();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="sm:max-w-sm md:min-w-full mx-auto p-1 h-auto">
        {/* Heading */}
        <AdminPageHeading
          title="Account Settings"
          subtitle="Manage your admin credentials including username, email, and password."
          icon={FaUserShield}
        />
      </div>

      <div className="mx-auto p-1 md:p-4 bg-gray-900 text-gray-200 rounded-md shadow-lg ">
        <h1 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
          Manage Your Account Credential
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {/* ================= Account Information ================= */}
          <div className="bg-gray-800 rounded-lg shadow p-1.5 md:p-6 space-y-5">
            <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
              Account Information
            </h2>

            {/* Warning */}
            <div className="rounded-md border border-yellow-500/40 bg-yellow-500/10 p-4">
              <div className="flex items-start gap-3">
                <div>
                  <h4 className="text-yellow-400 font-semibold">
                    <span className="text-yellow-400 text-xl">⚠️</span>
                    Important Notice
                  </h4>
                  <p className="text-sm text-yellow-200 mt-1">
                    If you change your username, email, or password, you will be logged out
                    automatically. Please log in again using your updated credentials.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleAccountUpdate}>
              {/* Username */}
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  value={accountValues.username}
                  onChange={handleAccountChange}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  value={accountValues.email}
                  onChange={handleAccountChange}
                />
              </div>

              <div className="text-right pt-2">
                <Button
                  label={loading ? "Saving Change..." : "Save Change"}
                  variant="submit"
                  type="submit"
                  disabled={loading}
                />
              </div>
            </form>
          </div>

          {/* ================= Security ================= */}
          <div className="bg-gray-800 rounded-lg shadow p-1.5 md:p-6 space-y-5">
            <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
              Security
            </h2>

            <form onSubmit={handleUpdatePassword}>
              <div className="grid grid-cols-1  gap-6">
                {/* Old Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="text-sm text-gray-400">Old Password</label>

                  <input
                    type={showOld ? "text" : "password"}
                    name="oldPassword"
                    onChange={handlePasswordChange}
                    value={passwordValues.oldPassword || ""}
                    placeholder="********"
                    className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowOld(!showOld)}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                  >
                    {showOld ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {passwordErrors.oldPassword && (
                    <p className="text-sm text-red-600 mt-1">{passwordErrors.oldPassword}</p>
                  )}
                </div>

                {/* New Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="text-sm text-gray-400">New Password</label>

                  <input
                    type={showNew ? "text" : "password"}
                    name="newPassword"
                    onChange={handlePasswordChange}
                    value={passwordValues.newPassword || ""}
                    placeholder="********"
                    className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                  >
                    {showNew ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {passwordErrors.newPassword && (
                    <p className="text-sm text-red-600 mt-1">{passwordErrors.newPassword}</p>
                  )}
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1 relative md:col-span-2 mt-5">
                <label className="text-sm text-gray-400">Confirm New Password</label>

                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handlePasswordChange}
                  value={passwordValues.confirmPassword || ""}
                  placeholder="********"
                  className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
                {passwordErrors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">{passwordErrors.confirmPassword}</p>
                )}
              </div>

              <div className="rounded-md border border-yellow-500/40 bg-yellow-500/10 p-4 mt-5">
                <h4 className="mb-1 text-sm font-semibold text-yellow-400">
                  🔏Important Security Notice
                </h4>

                <p className="text-sm leading-relaxed text-yellow-200">
                  After updating your password, you will be automatically logged out from your
                  account. Please log in again using your new password to continue.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  label={loading ? "Updating..." : "Update Password"}
                  variant="submit"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>

        {/* role management  */}

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
            Role Management
            <p className="text-sm text-gray-400">
              Assign or update roles for users using their email or username.
            </p>
          </h2>

          <div className="bg-gray-800 rounded-lg shadow p-1.5 md:p-6 space-y-5 mt-6">
            <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
              Manage User Roles
            </h2>

            <div className="rounded-md border border-red-500/50 bg-red-500/20 p-4">
              <h4 className="text-red-400 font-semibold mb-1">Role Rollback Notice</h4>
              <p className="text-sm text-red-200">
                To rollback a user, simply change their role to <b>User</b>. This will immediately
                remove all doctor-level access, and the account will function as a normal user
                account only.
              </p>
            </div>

            {/* User Identifier */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">User Email or Username</label>
              <input
                type="text"
                placeholder="Enter email or username"
                className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            {/* Current Role (Read Only) */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Current Role : N/A</label>
            </div>

            {/* Assign Role */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Assign New Role</label>
              <select className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500">
                <option value="user">User</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              {/* <button className="px-5 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white">
            Reset
          </button> */}

              <button
                className="
    inline-flex h-12 items-center justify-center rounded-md border border-blue-700
    bg-[linear-gradient(110deg,#003366,45%,#0055aa,55%,#003366)] bg-size[200%_100%]
    px-6 font-medium text-blue-100 transition-all duration-300
    hover:bg-[linear-gradient(110deg,#0055aa,45%,#003366,55%,#0055aa)] hover:scale-105 hover:shadow-lg
    active:scale-95 active:shadow-inner
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50
    cursor-pointer animate-shimmer
  "
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
