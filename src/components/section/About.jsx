import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";
import { MdLocalHospital, MdMedicalServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AboutImage from "../../assets/hospitals/about.png";

export const About = () => {
  return (
    <>
      <section className="w-full h-fit">
        <div className="max-w-[1400px] mx-auto py-3 px-0 ">
          <div className="heading text-center mt-10">
            {/* sub hading  */}
            <span className="text-green-500 font-semibold uppercase tracking-wider text-sm md:text-base">
              Who We Are
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800">
              About <span className="text-green-600">MediCare</span>
            </h1>

            {/* Underline */}
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mt-2"></div>
          </div>

          {/* content area */}

          <div className="flex items-start justify-evenly   mt-10 gap-0.5">
            {/* img */}

            <div className=" hidden md:block">
              <img src={AboutImage} alt="image" className="" />
            </div>

            {/* message */}
            <div className="p-6 md:p-5 max-w-3xl flex flex-col gap-6">
              {/* Description */}
              <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify">
                Providing compassionate healthcare with modern technology,{" "}
                <span className="font-semibold text-orange-400">MediCare</span> ensures that every
                patient receives personalized attention and trusted treatment. Our team of expert
                doctors is available <span className="font-semibold">24/7</span> to deliver
                high-quality care, advanced diagnostics, and emergency services whenever you need.
                We are committed to creating a healthier tomorrow for our community, combining
                experience, empathy, and modern medical practices.
                <br />
                At MediCare, we strive to combine trust, expertise, and innovation to provide every
                patient with the highest quality healthcare possible.
              </p>

              {/* Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                {/* 24x7 Service */}
                <div className="flex items-center gap-4 bg-green-50 rounded-2xl p-4 ">
                  <div className="bg-green-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <AiOutlineClockCircle />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg">24x7 Service</span>
                </div>

                {/* Expert Doctors */}
                <div className="flex items-center gap-4 bg-blue-50 rounded-2xl p-4 ">
                  <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <FaUserMd />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg">Expert Doctors</span>
                </div>

                {/* Emergency Care */}
                <div className="flex items-center gap-4 bg-purple-50 rounded-2xl p-4 ">
                  <div className="bg-purple-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <MdLocalHospital />
                  </div>
                  <span className="text-purple-800 font-semibold text-lg">Emergency Care</span>
                </div>

                {/* Modern Technology */}
                <div className="flex items-center gap-4 bg-yellow-50 rounded-2xl p-4 ">
                  <div className="bg-yellow-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <MdMedicalServices />
                  </div>
                  <span className="text-yellow-800 font-semibold text-lg">Modern Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
