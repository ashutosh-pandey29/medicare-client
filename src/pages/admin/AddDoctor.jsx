import { FaArrowsRotate } from "react-icons/fa6";

export const AddDoctor = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold bg-linear-to-r from-green-500 to-purple-500 text-transparent bg-clip-text">
          Add New Doctor
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Please register the doctor first, then proceed to fill in their personal and professional
          details.
        </p>
      </div>

      {/* ---------------- Basic Info ---------------- */}
      <div className="bg-white p-5 shadow rounded mb-8">
        <h2 className="text-lg font-semibold border-b border-zinc-300 pb-2 mb-3">
          Register Doctor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-600">Name:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Username:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password:</label>
            <div className="flex gap-2 mt-1">
              <input
                placeholder="Generate password..."
                className="border border-zinc-300 w-full h-10 px-3 rounded outline-none"
              />
              <button className="w-12 flex justify-center items-center border border-zinc-300 rounded hover:bg-orange-500 hover:text-white transition">
                <FaArrowsRotate />
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Role:</label>
            <select className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none">
              <option>Select Role</option>
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Admin</option>
            </select>
          </div>
        </div>

        <div className="text-right mt-5">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-800">
            Register
          </button>
        </div>
      </div>

      {/* ---------------- professional  Info ---------------- */}
      <div className="bg-white p-5 shadow rounded mb-8">
        <div className="border-b border-b-zinc-200 pb-3 mb-3">
          <h2 className="text-lg font-semibold capitalize">professional Information</h2>
          <p className="text-sm text-gray-500">Make sure the user account is already registered.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-600">User ID:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Department:</label>
            <select className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none">
              <option>Select</option>
              <option>Cardiology</option>
              <option>Orthopedic</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Clinic Name:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Experience:</label>
            <input className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none" />
          </div>
        </div>

        {/* Education */}
        <div className="mt-5">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-gray-600">Education</label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              placeholder="Degree"
              className="border border-zinc-300 h-10 px-3 rounded outline-none"
            />
            <input
              placeholder="Year"
              className="border border-zinc-300 h-10 px-3 rounded outline-none"
            />
            <input
              placeholder="College"
              className="border border-zinc-300 h-10 px-3 rounded outline-none"
            />
          </div>

          <button className="text-blue-700 cursor-pointer">+add more</button>
        </div>

        {/* Working Days */}
        <div className="mt-5">
          <label className="text-sm text-gray-600">Working Days:</label>
          <select className="border border-zinc-300 w-full h-10 px-3 rounded mt-2 outline-none">
            <option>Select Working Days</option>
            <option>Full Week</option>
            <option>Weekdays</option>
            <option>Weekend</option>
          </select>
        </div>

        {/* Slot Time */}
        <div className="mt-5">
          <label className="text-sm text-gray-600">Slot Timing:</label>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="time"
              className="border border-zinc-300 h-10 px-3 rounded outline-none w-full"
            />
            <span>to</span>
            <input
              type="time"
              className="border border-zinc-300 h-10 px-3 rounded outline-none w-full"
            />
          </div>

          <button className="text-blue-700 cursor-pointer">+add more</button>
        </div>

        {/* Bio */}
        <div className="mt-5">
          <label className="text-sm text-gray-600">Bio:</label>
          <textarea className="border border-zinc-300 w-full mt-2 px-3 py-2 rounded outline-none"></textarea>
        </div>

        <div>
          <label className="text-sm text-gray-600">Status:</label>
          <input
            value="Approved"
            readOnly
            className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none bg-gray-100"
          />
        </div>

        <div className="text-right mt-5">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
