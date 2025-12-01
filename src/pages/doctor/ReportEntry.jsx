import { FaPaperclip, FaPlus, FaTrash } from "react-icons/fa";

export const ReportEntry = () => {
  return (
    <section className="bg-white rounded-sm shadow p-4 md:p-6 w-full h-auto overflow-auto">
      <h3 className="text-xl font-semibold mb-6 text-slate-700">Patient Case & Report Entry</h3>

      <form className="space-y-6">
        {/* Patient Selector */}
        <div>
          <label className="text-sm font-medium text-slate-600">Patient I'd</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Patient I'd"
          />
        </div>

        {/* patient profile overview */}

        {/* Solution / Diagnosis */}
        <div>
          <label className="text-sm font-medium text-slate-600">Diagnosis / Treatment Plan</label>
          <textarea
            rows="3"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Eg. Viral fever suspected. Suggest rest, hydration..."
          ></textarea>
        </div>

        {/* Medicine List */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600">Medicines</label>

          {/* Medicine Item */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            <input className="border rounded-lg px-3 py-2 text-sm  border-slate-300  outline-none focus:ring-2 focus:ring-blue-600 " placeholder="Medicine Name" />
            <input
              className="border rounded-lg px-3 py-2 text-sm border-slate-300  outline-none  focus:ring-2 focus:ring-blue-600"
              placeholder="Dosage (e.g. 500mg)"
            />
            <input
              className="border rounded-lg px-3 py-2 text-sm border-slate-300  outline-none  focus:ring-2 focus:ring-blue-600"
              placeholder="Times/day (e.g. 2)"
            />
            <input
              className="border rounded-lg px-3 py-2 text-sm border-slate-300  outline-none  focus:ring-2 focus:ring-blue-600"
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


        {/* Notes */}
        <div>
          <label className="text-sm font-medium text-slate-600">Additional Notes</label>
          <textarea
            rows="4"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Eg. Come for review after 7 days... 
Eg. Take after meals, avoid cold food, drink water frequently...
            "
          ></textarea>
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
        <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm">
          Save Patient Record
        </button>
      </form>
    </section>
  );
};
