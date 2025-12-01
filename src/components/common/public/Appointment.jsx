import { Heading } from "../UI/Heading";
import appointmentImage from "../../assets/hospitals/appointment.png";
export const Appointment = () => {
  return (
    <>
     <section className="contact bg-[#e6e8ed] py-16">
  <div className="max-w-[1400px] mx-auto px-5">
    {/* Heading */}
    <Heading
      subHeading="Book Your Visit"
      mainHeading="Appointment at"
      name="MediCare"
    />

    {/* Content */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-10">
      
      {/* Side Image */}
      <div className="md:w-1/2">
        <img
          src={appointmentImage}
          alt="Appointment"
          className="w-full h-auto "
        />
      </div>

      {/* Form */}
      <div className="form md:w-1/2 bg-white p-6 md:p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4">
          Schedule an Appointment
        </h2>
        <p className="text-slate-600 mb-6">
          Fill out the form below and our team will get back to you promptly to confirm your appointment.
        </p>

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
          <input type="text" placeholder="Your Name" className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300" />
          <input type="date" className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300" />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input type="tel" placeholder="Phone Number" className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300" />
          <input type="email" placeholder="Email Address" className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300" />
        </div>

        {/* Message */}
        <textarea placeholder="Message" className="w-full h-[25vh] mt-4 border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"></textarea>

        {/* Submit Button */}
        <button className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
