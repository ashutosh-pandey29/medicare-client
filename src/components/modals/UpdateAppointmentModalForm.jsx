export const UpdateAppointmentModelForm = () => {
  return (
    <>
      <>
        <div className="p-1">
          <form action="">
            {/* Department & Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
                <option>Dermatology</option>
                <option>Gastroenterology</option>
                <option>ENT (Ear, Nose, Throat)</option>
                <option>Gynecology</option>
                <option>Psychiatry</option>
                <option>General Medicine</option>
              </select>

              <input
                type="date"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            {/* Name & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Please describe your problem or question..."
              className="w-full h-[25vh] mt-4 border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            ></textarea>

            {/* Submit Button */}
            <button className="mt-4 mb-5 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
              Update Appointment
            </button>
          </form>
        </div>
      </>
    </>
  );
};
