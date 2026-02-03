import { useEffect, useReducer, useState } from "react";
import { FaExclamationTriangle, FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { Button } from "../../components/UI/Button";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Modal } from "../../components/modals/Modal";
import { useModal } from "../../hooks/custom/useModal";
import { DeleteConfirmationModel } from "../../components/modals/DeleteConfirmationModel";
import { useForm } from "../../hooks/custom/useForm";
import { accountUpdateSchema, passwordUpdateSchema } from "../../utils/schema/auth.validation";
import { useAccount } from "../../hooks/auth/useAccount";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { BiLoader } from "react-icons/bi";
import { useWebPush } from "../../hooks/notification/useWebPush";
import { FaClock, FaUserShield } from "react-icons/fa6";
export const Account = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { modalData, openModal, closeModal } = useModal();
  const { loading, myAccountInfo, updateAccount, updatePassword, deleteAccount } = useAccount();
  const { clearAuth } = useAuth();
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const { enableNotification, disableNotification } = useWebPush();

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

  // handle notification

  const handleEnableNotifications = async (e) => {
    const checked = e.target.checked;

    if (!checked) {
      await disableNotification();
      setNotificationEnabled(false);
      return;
    }

    await enableNotification();
    setNotificationEnabled(true);
  };

  return (
    <>
      {/* heading */}
      <div
        className="relative w-full max-w-full rounded overflow-hidden shadow z-10"
        style={{
          background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
        }}
      >
        {/* Decorative medical cross patterns */}
        <div className="absolute top-4 right-8 w-16 h-16 opacity-10">
          <div className="absolute w-4 h-16 bg-white left-6"></div>
          <div className="absolute w-16 h-4 bg-white top-6"></div>
        </div>
        <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10">
          <div className="absolute w-3 h-12 bg-white left-4.5"></div>
          <div className="absolute w-12 h-3 bg-white top-4.5"></div>
        </div>

        {/* Pulse line decoration */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-0" viewBox="0 0 1000 200">
          <path
            d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 p-1 md:p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center lg:w-6xl">
              <div className="ml-1 w-full ">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h2 className="text-base md:text-2xl lg:text-4xl font-bold text-white">
                    Account Management
                  </h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  Review and update permitted account information. Certain settings are controlled
                  by the administrator.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
          <path
            d="M0,40L80,45C160,50,320,60,480,58C640,56,800,42,960,40C1120,38,1280,48,1360,53L1440,58L1440,100L0,100Z"
            fill="rgba(255,255,255,0.15)"
          />
        </svg>
      </div>

      <div className="mt-6 rounded border-l-4 border-amber-500 bg-amber-50 p-4">
        <h4 className="text-sm font-semibold text-amber-700 mb-1">Important Security Notice</h4>

        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          The password sent to your email is temporary. For security reasons, we strongly recommend
          that you create a new password. If you do not update it, the current password will
          continue to remain active.
        </p>
      </div>

      <section className="bg-white rounded-sm shadow p-1   w-full h-auto mt-5">
        {/* profile settings */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="p-5 shadow-md rounded mt-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-1">Account Information</h2>
            <p className="text-sm text-gray-500 mb-6">
              Update your personal details shown on your profile.
            </p>

            <div className="grid grid-cols-1  gap-6">
              <form onSubmit={handleAccountUpdate}>
                {/* username */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                    placeholder="username "
                    value={accountValues.username}
                    onChange={handleAccountChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1 mt-5">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    readOnly
                    className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                    placeholder="example@email.com"
                    value={accountValues.email}
                    onChange={handleAccountChange}
                  />
                  <span className="text-red-600 text-sm flex items-center gap-0.5">
                    <FaExclamationTriangle /> You do not have permission to update this email
                    address.
                  </span>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button
                    label={loading ? "Saving Change..." : "Save Change"}
                    variant="submit"
                    type="submit"
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* security -  change password */}
          <div className="p-4 shadow-md rounded  mt-10">
            <h2 className="text-xl font-semibold text-slate-800">Security – Change Password</h2>
            <p className="text-sm text-gray-500 mb-6">
              Change your account password regularly to protect your account from unauthorized
              access.
            </p>

            <form onSubmit={handleUpdatePassword}>
              <div className="grid grid-cols-1  gap-6">
                {/* Old Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="text-sm font-medium text-slate-700">Old Password</label>

                  <input
                    type={showOld ? "text" : "password"}
                    name="oldPassword"
                    onChange={handlePasswordChange}
                    value={passwordValues.oldPassword || ""}
                    placeholder="********"
                    className="h-11 px-3 pr-10 rounded-md border border-zinc-300
              focus:outline-none focus:ring-2 focus:ring-green-500/40
              focus:border-green-500 transition"
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
                  <label className="text-sm font-medium text-slate-700">New Password</label>

                  <input
                    type={showNew ? "text" : "password"}
                    name="newPassword"
                    onChange={handlePasswordChange}
                    value={passwordValues.newPassword || ""}
                    placeholder="********"
                    className="h-11 px-3 pr-10 rounded-md border border-zinc-300
              focus:outline-none focus:ring-2 focus:ring-green-500/40
              focus:border-green-500 transition"
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
                <label className="text-sm font-medium text-slate-700">Confirm New Password</label>

                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handlePasswordChange}
                  value={passwordValues.confirmPassword || ""}
                  placeholder="********"
                  className="h-11 px-3 pr-10 rounded-md border border-zinc-300
              focus:outline-none focus:ring-2 focus:ring-green-500/40
              focus:border-green-500 transition"
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

              <div className="mt-6 rounded-md border-l-4 border-red-600 bg-red-50 p-4">
                <h4 className="text-sm font-semibold text-red-700 mb-1">
                  Important Security Notice
                </h4>

                <p className="text-sm text-red-600 leading-relaxed">
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

        {/* notification  */}

        <div className="bg-white rounded-md shadow p-6 space-y-5 mt-5">
          <h2 className="text-lg font-semibold text-black border-b border-gray-700 pb-2">
            Notification Control
          </h2>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-800 font-medium">Enable Notifications</p>
              <p className="text-sm text-gray-700">
                Receive appointment updates, alerts, and reminders.
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              {loading ? (
                <>
                  <BiLoader className="animate-spin text-xl text-white" />
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notificationEnabled}
                    onChange={handleEnableNotifications}
                  />
                  <div
                    className="peer bg-gray-200 w-14 h-6 rounded-full relative
                        after:content-[''] after:absolute after:top-1 after:left-1
                        after:w-4 after:h-4 after:bg-gray-600 after:rounded-full
                        after:transition-transform peer-checked:after:translate-x-8
                        peer-checked:bg-zinc-200"
                  ></div>
                </>
              )}
            </label>
          </div>
        </div>


       

        <Modal data={modalData} onClose={closeModal} />
      </section>
    </>
  );
};
