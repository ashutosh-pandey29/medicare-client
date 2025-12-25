import React from "react";
import { RiCalendar2Fill, RiClockwise2Fill, RiPhoneCameraFill } from "react-icons/ri";

export const ServiceCTA = () => {
  return (
    <>
      <div className="bg-linear-to-br from-green-600 to-green-700 rounded md:px-6 px-1  py-1 shadow">
        <div className="text-white text-center md:text-left flex-1 ">
          <h3 className="text-3xl md:text-3xl font-bold mt-3 ">Need Medical Assistance?</h3>
          <p className="text-green-50 text-lg max-w-xl mt-2">
            Book an appointment with our experienced doctors or contact us for immediate medical
            support.
          </p>

          <div className="flex flex-col gap-4 mt-5">
            {/* Book Appointment */}
            <button className="flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-200 shadow-lg">
              <RiCalendar2Fill className="w-5 h-5" />
              Book Appointment
            </button>

            {/* Call Now */}
            <button className="flex items-center justify-center gap-3 bg-green-700 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-200 shadow-lg">
              <RiPhoneCameraFill className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
