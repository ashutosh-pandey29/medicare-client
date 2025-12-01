export const NewAppointmentModel = () => {
  return (
    <>
      {/* heading  */}

      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
          Book Your Appointment
        </h2>
        <p className="text-gray-500">
          {" "}
          Choose a doctor, select a date and time, and confirm your appointment easily.
        </p>
      </div>

      {/* Department & Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300">
          <option>Select Department</option>
          <option>Cardiology</option>
          <option>Pediatrics</option>
          <option>Neurology</option>
        </select>

        <select className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300">
          <option>Choose Service</option>
          <option>CT Scan</option>
          <option>Examination</option>
          <option>Joint Replacement</option>
        </select>
      </div>

      {/* Name & Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          type="date"
          className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Message"
        className="w-full h-[25vh] mt-4 border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
      ></textarea>

      {/* Submit Button */}
      <button className="mt-4 mb-5 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
        Book Appointment
      </button>
    </>
  );
};
