import React from "react";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { FaUserShield } from "react-icons/fa";

export const Account = () => {
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

            {/* Username */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            <div className="text-right pt-2">
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

          {/* ================= Security ================= */}
          <div className="bg-gray-800 rounded-lg shadow p-1.5 md:p-6 space-y-5">
            <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
              Security
            </h2>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Confirm New Password</label>
              <input
                type="password"
                placeholder="Re-enter new password"
                className="w-full rounded-md px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            <div className="text-right pt-2">
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
                Update Password
              </button>
            </div>
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
