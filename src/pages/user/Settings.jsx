import { useState } from "react";
import { FaUser, FaLock, FaBell, FaShieldAlt, FaTrash } from "react-icons/fa";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="bg-white rounded-sm shadow p-1  md:p-3  w-full h-auto">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Account Settings</h2>

      {/* profile settings */}

      <div className="p-3 border-t border-zinc-100">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex gap-2 flex-col">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="name">Username : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="name">Email : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="name">Phone : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>
        </div>
        <button className="mt-5 bg-green-600 text-white px-3 py-2  rounded hover:bg-green-700 cursor-pointer  ">
          Update Profile
        </button>
      </div>

      {/* security -  change password */}

      <div className="p-3 border-t border-zinc-100 mt-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Security - Change Password</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex gap-2 flex-col">
            <label htmlFor="name">Old Password : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="name">New Password : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="name">Re-Enter new Password : </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 h-10 w-full outline-0 border-2 border-zinc-200 rounded-sm"
            />
          </div>
        </div>
        <button className="mt-5 bg-green-600 text-white px-3 py-2  rounded hover:bg-green-700 cursor-pointer ">
          Update Password
        </button>
      </div>

      {/* >Privacy & Data Control*/}

      <div className="p-3 border-t border-zinc-100 mt-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Privacy & Data Control</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex gap-2 flex-col">
            <label className="flex items-center gap-3">
              <input type="checkbox" /> Allow doctors to view my reports
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" /> Allow emergency access to medical summary
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" /> Share diagnostics with partnered labs
            </label>
          </div>

         

        </div>
        
      </div>

      {/* delete profile  */}

      <div className="p-3 border-t border-zinc-100 mt-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Delete Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <p className="text-red-600">
            This action cannot be undone. All data will be permanently removed.
          </p>
        </div>
        <button className="mt-5 bg-red-600 text-white px-3 py-2  rounded hover:bg-red-700 cursor-pointer ">
          delete Profile
        </button>
      </div>
    </section>
  );
}
