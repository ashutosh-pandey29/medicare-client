import { FaPaperclip, FaPlus, FaTrash } from "react-icons/fa";
import { Button } from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

export const ReportEntry = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto ">
      {/* page heading  */}

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
        <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-50" viewBox="0 0 1000 200">
          <path
            d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">
                    Patient Case & Report Entry
                  </h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  Manage and update the patient’s complete set of medical reports and files.
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

      <div className="shadow rounded bg-white p-5 mt-5">
        <form className="space-y-6">
          {/* Patient Selector */}
          <div>
            <label className="text-sm font-medium text-slate-600">Patient / Appointment I'd</label>
            <input
              type="text"
              className=" mt-3 w-full border border-slate-300 rounded-lg px-4 py-3  text-sm   focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 focus:border-0"
              placeholder="Enter Patient I'd"
            />
          </div>

          {/* patient profile overview */}

          {/* Solution / Diagnosis */}
          <div>
            <label className="text-sm font-medium text-slate-600">Diagnosis / Treatment Plan</label>
            <textarea
              rows="3"
              className="mt-3 w-full border border-slate-300 rounded-lg px-4 py-3  text-sm   focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 focus:border-0"
              placeholder="Eg. Viral fever suspected. Suggest rest, hydration..."
            ></textarea>
          </div>

          {/* Medicine List */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Medicines</label>

            {/* Medicine Item */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center mt-3">
              <input
                className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition focus:border-0 "
                placeholder="Medicine Name"
              />
              <input
                className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition focus:border-0"
                placeholder="Dosage (e.g. 500mg)"
              />
              <input
                className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition focus:border-0"
                placeholder="Times/day (e.g. 2)"
              />
              <input
                className="h-11 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition focus:border-0"
                placeholder="Duration (e.g. 5 days)"
              />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaPlus /> Add More Medicine
            </button>
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-1">
            <label className="border border-slate-300 px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 text-sm w-fit hover:bg-slate-100">
              <FaPaperclip className="text-slate-600" /> Attach Report File
              <input type="file" hidden />
            </label>
            <span className="text-xs text-gray-500">*Optional</span>
          </div>

          {/* Submit */}

          <div className="text-right">
            <Button label={"Upload Report"} variant="primary" type="submit" onClick={()=>navigate(`mode/:123456?`)} />
          </div>
        </form>
      </div>
    </section>
  );
};
