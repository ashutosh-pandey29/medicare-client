import { FaAnglesRight,FaAnglesLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const PatientQueue = () => {
  return (
    <>
      <section className="">
        {/* patient queue row */}

        <div className="w-6xl mx-auto custom-scroll flex border rounded border-zinc-100 ">

          <button className="px-3 py-1 rounded text-xl bg-zinc-100">
            <FaAnglesLeft />

          </button>

          <div className="flex gap-0.5  overflow-x-auto custom-scroll  p-1">
            <div className="px-3 py-1 rounded text-xl border border-zinc-100  bg-green-500 text-white">
              1
            </div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">2</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-white bg-yellow-500">
              3
            </div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">5</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-white bg-gray-400">
              6
            </div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
            <div className="px-3 py-1 rounded text-xl border border-zinc-100 text-slate-800">4</div>
          </div>

          {/* swap button */}
          <button className="px-3 py-1 rounded text-lg  bg-zinc-100">
            <FaAnglesRight />

          </button>
        </div>

        {/* patient details  */}

        <div className="bg-white p-4  border-gray-200 max-w-full">
          <div className="flex justify-between items-center mb-4 border-b border-b-zinc-100 p-1">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">Patient Details</h2>
            <NavLink to="/dashboard/doctor/report-entry" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer">
              Add Report
            </NavLink>
          </div>

          <div className="space-y-2 text-gray-700 text-sm ">
            <p>
              <span className="font-semibold">Patient Name:</span> Rahul Sharma
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">Age:</span> 29
            </p>
            <p>
              <span className="font-semibold">Gender:</span> Male
            </p>
            <p>
              <span className="font-semibold">Appointment ID:</span> #APT-139M287
            </p>
            <p>
              <span className="font-semibold">Appointment Date:</span> 12/01/2025
            </p>
            <p>
              <span className="font-semibold">Consulting Doctor:</span> Dr. Amit Verma (Orthopedic)
            </p>
            <p>
              <span className="font-semibold">Visit Type:</span> Returning
            </p>
            <p>
              <span className="font-semibold">Problem:</span> Severe Back Pain
            </p>
            <p>
              <span className="font-semibold">Report Status:</span> Pending
            </p>
          </div>

          <div className="mt-4 flex gap-3 justify-center">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer">
              Skip
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
