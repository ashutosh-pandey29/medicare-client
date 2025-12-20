import { useState } from "react";

const Toggle = () => <input type="checkbox" className="w-5 h-5 cursor-pointer accent-blue-600" />;

export const Settings = () => {
  return (
    <>
      <div className=" sm:max-w-sm md:min-w-full  mx-auto overflow-x-auto p-1">
        <div className="flex flex-start  md:justify-between md:items-center flex-col md:flex-row">
          <div className="md:mb-8 mb-4">
            <h2 className="text-base md:text-4xl lg:text-3xl  font-extrabold bg-linear-to-r from-green-500 to-purple-400 text-transparent bg-clip-text">
              Settings
            </h2>
            <p className="text-gray-500 text-sm">Manage departments, doctors and access levels</p>
          </div>
        </div>

        <div className="min-h-screen ">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* ================= Website Branding ================= */}
            <div className="bg-white shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Website Branding</h2>

              <input
                type="text"
                placeholder="Website Title"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Tagline / Subtitle"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Logo Upload</label>
                  <input
                    type="file"
                    className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Favicon Upload</label>
                  <input
                    type="file"
                    className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="text-right">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Save Settings
                </button>
              </div>
            </div>

            {/* ================= Contact & Company Info ================= */}
            <div className="bg-white rounded shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Contact & Hospital Info</h2>

              <input
                type="text"
                placeholder="Hospital Name"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Support Email"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Support Phone Number"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              />

              <textarea
                placeholder="Address"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              ></textarea>

              <input
                type="text"
                placeholder="Working Hours (e.g. 9 AM - 6 PM)"
                className="w-full border rounded px-4 py-2 border-zinc-200 outline-0 focus:border-blue-500"
              />

              <div className="text-right">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Save Settings
                </button>
              </div>
            </div>

            {/* ================= Notification Settings ================= */}
            <div className="bg-white rounded shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800  border-b border-b-zinc-100 ">
                Notification Settings
              </h2>

              {["Email Notifications", "SMS Notifications", "WhatsApp Notifications"].map(
                (item, index) => (
                  <div key={index} className="flex justify-between items-center pb-2">
                    <span className="text-gray-700">{item}</span>

                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" class="sr-only peer" value="" />
                      <div class="group peer bg-white rounded-full duration-300 w-14 h-6 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
                    </label>
                  </div>
                )
              )}
            </div>

            {/* ================= System Controls ================= */}
            <div className="bg-white rounded shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">System Controls</h2>

              <div className="flex justify-between items-center  pb-2 border-b border-b-zinc-100">
                <span className="text-gray-700">
                  Enable maintenance mode to temporarily restrict user access during system updates
                </span>

                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" value="" />
                  <div class="group peer bg-white rounded-full duration-300 w-14 h-6 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
                </label>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center  rounded-lg px-4">
                  <span className="text-gray-700">Want to clear your cache?</span>
                  <button className="px-4 py-2  text-white rounded hover:bg-red-700  bg-red-600 cursor-pointer">
                    Clear Cache
                  </button>
                </div>

                <div className="flex justify-between items-center  rounded-lg px-4 ">
                  <span className="text-gray-700">Create a backup of the database</span>
                  <button className="px-4 py-2  text-white rounded hover:bg-gray-700  bg-gray-600 cursor-pointer">
                    Backup Database
                  </button>
                </div>

                <div className="flex justify-between items-center  rounded-lg px-4">
                  <span className="text-gray-700">Export system reports (CSV / PDF)</span>
                  <button className="px-4 py-2  text-white rounded hover:bg-indigo-700  bg-indigo-600 cursor-pointer ">
                    Export Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-5">
            System Version: <span className="font-semibold">v1.0.0</span>
          </p>
        </div>
      </div>
    </>
  );
};
