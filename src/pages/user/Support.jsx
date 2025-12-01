import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaPaperclip } from "react-icons/fa";

export default function Support() {
  const [ticketData, setTicketData] = useState({ category: "", description: "", priority: "Low" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white rounded-sm shadow p-1  md:p-3  w-full h-screen">
     
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-slate-700">
        Raise a Support Ticket
      </h3>

      {!submitted ? (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
            >
              <option>Select Issue Category</option>
              <option>Medical Reports</option>
              <option>Billing & Payments</option>
              <option>Appointments</option>
              <option>Account & Login</option>
            </select>

            <select
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setTicketData({ ...ticketData, priority: e.target.value })}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <textarea
            rows="4"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Describe your issue in detail..."
            onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
          ></textarea>

          <label className="border border-slate-300 px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 text-sm w-fit hover:bg-slate-100">
            <FaPaperclip className="text-slate-600" /> Attach File
            <input type="file" hidden />
          </label>

          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
            Submit Ticket
          </button>
        </form>
      ) : (
        <p className="text-green-600 bg-green-50 border border-green-300 p-4 rounded-lg text-center font-medium mt-6">
          Ticket submitted successfully! 🎉 Our team will contact you soon.
        </p>
      )}

      {/* Contact Information */}
      <div className="mt-12 bg-slate-50 border border-slate-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 text-slate-700">Contact Support Directly</h3>
        <div className="flex flex-col sm:flex-row gap-6 text-sm">
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />{" "}
            <span className="font-medium">+91 98765 43210</span>
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />{" "}
            <span className="font-medium">support@hospital.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
