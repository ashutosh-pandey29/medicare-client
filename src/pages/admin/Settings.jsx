import { useState } from "react";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { FaCogs } from "react-icons/fa";

const Toggle = () => <input type="checkbox" className="w-5 h-5 cursor-pointer accent-blue-600" />;

export const Settings = () => {
  return (
    <>
      <AdminPageHeading
        title={"System And Site Settings"}
        subtitle={
          "Configure your website’s branding, contact information, system settings, database operations, and additional controls all in one place."
        }
        icon={FaCogs}
      />

      <div className="sm:max-w-sm md:min-w-full mx-auto p-4 bg-gray-900 min-h-screen text-gray-200">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-xl font-semibold text-white border-b border-slate-700 pb-3 p-2">
            Website Settings
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ================= Website Branding ================= */}
            <div className="bg-gray-800 rounded-md shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">Website Branding</h2>

              <input
                type="text"
                placeholder="Website Title"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Tagline / Subtitle"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Logo Upload</label>
                  <input
                    type="file"
                    className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Favicon Upload</label>
                  <input
                    type="file"
                    className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="text-right">
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

            {/* ================= Contact & Hospital Info ================= */}
            <div className="bg-gray-800 rounded-md shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">Contact & Hospital Info</h2>

              <input
                type="text"
                placeholder="Hospital Name"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Support Email"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Support Phone Number"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Address"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              ></textarea>

              <input
                type="text"
                placeholder="Working Hours (e.g. 9 AM - 6 PM)"
                className="w-full border rounded px-4 py-3 border-gray-700 bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
              />

              <div className="text-right">
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

        {/* system settings */}

        <div className="max-w-6xl mx-auto space-y-6 mt-10 ">
          {/* ================= Page Title ================= */}
          <h1 className="text-xl font-semibold text-white border-b border-slate-700 pb-3">
            System Settings
          </h1>

          {/* ================= Maintenance & Access ================= */}
          <div className="bg-gray-800 rounded-lg shadow p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              System Access & Maintenance
            </h2>

            {/* Maintenance Mode */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-300 font-medium">Maintenance Mode</p>
                <p className="text-sm text-gray-400">
                  Temporarily disable website access while system maintenance is in progress.
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div
                  className="peer bg-gray-700 w-14 h-6 rounded-full relative
          after:content-[''] after:absolute after:top-1 after:left-1
          after:w-4 after:h-4 after:bg-blue-500 after:rounded-full
          after:transition-transform peer-checked:after:translate-x-8
          peer-checked:bg-green-500"
                ></div>
              </label>
            </div>

            {/* Maintenance Info */}
            <div className="rounded-md bg-yellow-500/10 border border-yellow-500/30 p-4">
              <p className="text-sm text-yellow-200">
                When enabled, all users will see a maintenance notice and will not be able to access
                the website until maintenance mode is disabled.
              </p>
            </div>
          </div>

          {/* ================= Database & System Operations ================= */}
          <div className="bg-gray-800 rounded-lg shadow p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Database & System Operations
            </h2>

            {/* Backup Interval */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-300 font-medium">Database Backup Interval</p>
                <p className="text-sm text-gray-400">
                  Choose how often the system should automatically backup the database.
                </p>
              </div>

              <select className="bg-gray-900 border border-gray-700 text-gray-200 rounded-md px-4 py-3 focus:border-blue-500 outline-none">
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Every 6 Months</option>
              </select>
            </div>

            {/* System Actions */}
            <div className="space-y-3 pt-3">
              <div className="flex justify-between items-center rounded-lg px-4 py-3 bg-gray-900">
                <span className="text-gray-300">Manual database backup</span>
                <button
                  className="
    inline-flex h-12 items-center justify-center rounded-md border border-slate-800
    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size[200%_100%]
    px-6 font-medium text-slate-100 transition-all duration-300
    hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)]
    hover:scale-105 hover:shadow-lg
    active:scale-95 active:shadow-inner
    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
    cursor-pointer
    animate-shimmer
  "
                >
                  Database Backup
                </button>
              </div>

              <div className="flex justify-between items-center rounded-lg px-4 py-3 bg-gray-900 hover:bg-gray-800 transition">
                <span className="text-gray-300 font-medium">Clear system cache</span>

                <button
                  className="
    inline-flex h-12 items-center justify-center rounded-md border border-red-700
    bg-[linear-gradient(110deg,#330000,45%,#660000,55%,#330000)] bg-size[200%_100%]
    px-6 font-medium text-red-100 transition-all duration-300
    hover:bg-[linear-gradient(110deg,#660000,45%,#330000,55%,#660000)] hover:scale-105 hover:shadow-lg
    active:scale-95 active:shadow-inner
    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-50
    cursor-pointer animate-shimmer
  "
                >
                  Clear Cache
                </button>
              </div>
            </div>
          </div>

          {/* ================= Extra Useful Settings (MVP+) ================= */}
          <div className="bg-gray-800 rounded-lg shadow p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Additional System Controls
            </h2>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-300 font-medium">Enable Activity Logs</p>
                <p className="text-sm text-gray-400">
                  Track admin actions and critical system changes.
                </p>
              </div>

              <input type="checkbox" className="w-5 h-5 accent-blue-600 cursor-pointer" />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-300 font-medium">Force logout on role change</p>
                <p className="text-sm text-gray-400">
                  Automatically log users out when their role is updated.
                </p>
              </div>

              <input type="checkbox" className="w-5 h-5 accent-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* ================= Footer ================= */}
          <p className="text-sm text-gray-500 text-center mt-6">
            System Version: <span className="font-semibold">v1.0.0</span>
          </p>
        </div>
      </div>
    </>
  );
};
