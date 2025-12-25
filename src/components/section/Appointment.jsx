import { Heading } from "../UI/Heading";
import appointmentImage from "../../assets/hospitals/appointment.png";
import { OptimizedImage } from "../common/public/OptimizedImage";
import { Button } from "../UI/Button";
export const Appointment = () => {
  return (
    <>
      <section className="contact bg-[#e6e8ed] py-1">
        <div className="max-w-[1400px] mx-auto px-5">
          {/* Heading */}
          <Heading subHeading="Book Your Visit" mainHeading="Appointment at" name="MediCare" />

          {/* Content */}
          <div className="flex flex-col justify-center md:flex-row items-start md:items-center gap-10 mt-10">
            {/* Side Image */}
            <div className="hidden md:block">
              <OptimizedImage src={appointmentImage} alt="Appointment" className="w-full h-auto " />
            </div>

            {/* Form */}

            <div className="form  md:w-1/2 bg-gray-50 p-6 md:p-10 rounded shadow  ">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-2">
                Schedule an Appointment
              </h2>

              <p className="text-slate-600 mb-6">
                Fill out the form below and our team will contact you to confirm your appointment.
              </p>

              <form className="space-y-4">
                {/* Department & Doctor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Select Department</label>
                    <select className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300">
                      <option value="">Select Department</option>
                      <option>Cardiology</option>
                      <option>Pediatrics</option>
                      <option>Neurology</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Select Doctor</label>
                    <select className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300">
                      <option value="">Select Doctor</option>
                      <option>Dr. Sharma</option>
                      <option>Dr. Patel</option>
                      <option>Dr. Khan</option>
                    </select>
                  </div>
                </div>

                {/* Name & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Name : </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Appointment Date : </label>

                    <input
                      type="date"
                      className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Phone : </label>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Email : </label>

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </div>
                </div>

                {/* Message */}

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Problem : </label>

                  <textarea
                    placeholder="Explain Your Problem....."
                    className="w-full h-[20vh] border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
                  ></textarea>
                </div>

                {/* Submit */}

                <Button
                  label={"Book Appointment"}
                  customClass={
                    "bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600"
                  }
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
