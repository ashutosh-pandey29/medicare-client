import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { Button } from "../../components/UI/Button";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useMe } from "../../hooks/auth/useMe";
import { Modal } from "../../components/modals/Modal";
import { useModal } from "../../hooks/custom/useModal";
import { DeleteConfirmationModel } from "../../components/modals/DeleteConfirmationModel";
import { useForm } from "../../hooks/custom/useForm";
import { accountUpdateSchema } from "../../utils/schema/auth.validation";
import { useAccount } from "../../hooks/auth/useAccount";
import { toast } from "react-toastify";

export const Account = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState("");
  const { modalData, openModal, closeModal } = useModal();
  const { loading, myAccountInfo, updateAccount, updatePassword } = useAccount();

  const initialValues = {
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const { values, setValues, errors, setErrors, handleChange, validateOnSubmit, resetForm } =
    useForm(initialValues, accountUpdateSchema);

  const fetchAccount = async () => {
    const response = await myAccountInfo();
    console.log(response.data);
    setValues(response.data);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  // update account information

  const handleAccountUpdate = async (e) => {
    e.preventDefault();

    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    try {
      const payload = {
        username: values.username,
        email: values.email,
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
    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;
    try {
      const payload = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      const response = await updatePassword(payload);
      toast.success(response.message);

      resetForm();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="bg-white rounded-sm shadow p-1  md:p-3  w-full h-auto">
      <UserPageHeading
        title="Account"
        subText="View and update your personal information, security, and account preferences."
        icon={<MdOutlineManageAccounts />}
      />

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
                  value={values.username}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                  placeholder="example@email.com"
                  value={values.email}
                  onChange={handleChange}
                />
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
            Change your account password regularly to protect your account from unauthorized access.
          </p>

          <form onSubmit={handleUpdatePassword}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Old Password */}
              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-medium text-slate-700">Old Password</label>

                <input
                  type={showOld ? "text" : "password"}
                  name="oldPassword"
                  onChange={handleChange}
                  value={values.oldPassword || ""}
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
              </div>

              {/* New Password */}
              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-medium text-slate-700">New Password</label>

                <input
                  type={showNew ? "text" : "password"}
                  name="newPassword"
                  onChange={handleChange}
                  value={values.newPassword || ""}
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
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1 relative md:col-span-2 mt-5">
              <label className="text-sm font-medium text-slate-700">Confirm New Password</label>

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword || ""}
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
            </div>

            <div className="mt-6 rounded-md border-l-4 border-red-600 bg-red-50 p-4">
              <h4 className="text-sm font-semibold text-red-700 mb-1">Important Security Notice</h4>

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

      {/* delete profile  */}

      <div className="p-6 mt-10 border border-red-200 bg-red-50 rounded-lg">
        <h2 className="text-xl font-semibold text-red-700 mb-3">Delete Profile</h2>

        <p className="text-sm text-red-600 mb-4">
          Deleting your profile is a permanent action and cannot be undone.
        </p>

        <ul className="list-disc list-inside text-sm text-red-600 space-y-1 mb-6">
          <li>All your personal information will be permanently removed</li>
          <li>Your appointments, payments, and medical reports will be deleted</li>
          <li>You will lose access to your account immediately</li>
        </ul>

        <div className="flex justify-end">
          <Button
            label="Delete Profile"
            variant="danger"
            onClick={() =>
              openModal(
                <DeleteConfirmationModel
                  title="delete your account"
                  onClose={closeModal}
                  content={
                    <>
                      <p className="text-red-700 p-2 border-l-4 mt-3 mb-4 bg-red-100 rounded-md">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Your account will be deactivated immediately</li>
                          <li>You can recover it within 7 days by logging in again</li>
                          <li>After 7 days, it will be permanently disabled</li>
                          <li>Your data will be retained for analytics and audit</li>
                        </ul>
                      </p>
                    </>
                  }
                />,
                "Account Deletion"
              )
            }
          />
        </div>
      </div>

      <Modal data={modalData} onClose={closeModal} />
    </section>
  );
};
