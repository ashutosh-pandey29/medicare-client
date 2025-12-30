import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaTrashAlt,
  FaSave,
  FaEdit,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUserShield,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";
import { MdSecurity, MdNotifications } from "react-icons/md";
import { Button } from "../../components/UI/Button";

export const Account = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

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

        <div className="mt-6 rounded border-l-4 border-red-600 bg-red-100 p-4 ">
          <h4 className="text-sm font-semibold text-red-700 mb-1">Important Security Notice</h4>

          <p className="text-sm text-gray-600 leading-relaxed mt-2">
            You may update your username. Email address , password and other login credentials
            cannot be changed without administrator approval.
          </p>
        </div>

        <div className="p-5 border-t border-zinc-100   bg-white rounded mt-5">
          <h2 className="text-xl font-semibold text-slate-800 mb-1">Account Information</h2>
          <p className="text-sm text-gray-500 mb-6">
            Update your personal details shown on your profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700">Username</label>
              <input
                type="text"
                className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                placeholder="Choose a username"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <input
                readOnly="required"
                type="email"
                className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button label={"Save Change"} variant="submit" />
          </div>
        </div>

        {/* security -  change password */}

        <div className="p-4 border-t border-zinc-100 mt-10 bg-white rounded">
          <h2 className="text-xl font-semibold text-slate-800">Security – Change Password</h2>
          <p className="text-sm text-gray-500 mb-6">
            Change your account password regularly to protect your account from unauthorized access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Old Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-sm font-medium text-slate-700">Old Password</label>

              <input
                type={showOld ? "text" : "password"}
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

            {/* Confirm Password */}
            <div className="flex flex-col gap-1 relative md:col-span-2">
              <label className="text-sm font-medium text-slate-700">Confirm New Password</label>

              <input
                type={showConfirm ? "text" : "password"}
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
          </div>

          <div className="mt-6 flex justify-end">
            <Button label={"Update Password"} variant="submit" disabled={true} />
          </div>
        </div>

        {/* account  */}
        <div className="relative bg-amber-50 rounded p-6 border border-amber-100 mt-10">
          <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
            <FaExclamationTriangle className="text-amber-600" />
            Account Deletion Request
          </h2>

          <p className="text-amber-900/90 text-sm mb-4 leading-relaxed">
            Doctors cannot delete their accounts directly. To maintain system integrity and patient
            data safety, all account deletions require administrator approval.
          </p>

          <ul className="space-y-2 text-sm text-amber-900/80 mb-5">
            <li className="flex items-start gap-2">
              <FaUserShield className="mt-1 text-amber-600" />
              You can submit a request to delete your account.
            </li>
            <li className="flex items-start gap-2">
              <FaInfoCircle className="mt-1 text-amber-600" />
              Once approved by an administrator, the account will be marked for deletion.
            </li>
            <li className="flex items-start gap-2">
              <FaClock className="mt-1 text-amber-600" />
              The administrator can roll back the account within <b>24 hours</b> if required.
            </li>
            <li className="flex items-start gap-2">
              <FaInfoCircle className="mt-1 text-amber-600" />
              After 24 hours, the account will be permanently deleted.
            </li>
          </ul>

          <div className=" text-right">
            <Button
              label={"Request Account Deletion"}
              variant="danger"
              customCss={"bg-amber-600 text-white "}
            />
          </div>

          <p className="text-xs text-amber-800/70 mt-3">
            *Final deletion is controlled and executed by the system administrator only.
          </p>
        </div>
      </div>
    </div>
  );
};
