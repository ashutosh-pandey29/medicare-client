import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";
import { MdLocalHospital, MdMedicalServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import aboutImage from "../../assets/hospitals/about-page.png";
import { Heading } from "../UI/Heading";
import { OptimizedImage } from "../common/public/OptimizedImage";

export const About = () => {
  return (
    <>
      <section className="w-full h-fit">
        <div className="max-w-[1400px] mx-auto py-3 px-0 ">
          <Heading subHeading={" Who We Are"} mainHeading={" About "} name={"MediCare"} />

          {/* content area */}

          <div className="flex items-start justify-evenly   mt-10 gap-0.5">
            {/* img */}

            <div className="flex flex-col justify-center md:flex-row items-start  gap-10 md:gap-20 ">
              {/* Image */}
              <div className=" hidden md:flex  justify-center items-center ">
                <OptimizedImage
                  src={aboutImage}
                  alt="About MediCare"
                  className="w-full h-auto rounded-xs mt-5 "
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 px-3 md:px-0">
                {/* <h2 className="text-2xl md:text-4xl text-left font-bold mb-1 text-slate-800">
                  Our <span className="text-green-500">Story</span>
                </h2> */}

                <div className="content md:mt-10">
                  <p className="text-slate-700 text-justify md:text-left text-base md:text-lg leading-relaxed mb-4">
                    <span className="font-semibold text-green-500">MediCare</span> was founded in{" "}
                    <span className="font-semibold">2005 </span>
                    with a vision to make{" "}
                    <span className="font-semibold text-green-500">
                      high-quality healthcare
                    </span>{" "}
                    accessible to everyone. What started as a{" "}
                    <span className="font-semibold">small clinic</span> with a handful of dedicated
                    <span className="font-semibold text-green-500">doctors and nurses</span> has
                    grown into a<span className="font-semibold">trusted healthcare network</span>{" "}
                    serving thousands of patients annually. We combine{" "}
                    <span className="font-semibold text-green-500">
                      advanced medical technology
                    </span>
                    with a <span className="font-semibold">patient-centered approach</span>,
                    ensuring each individual receives the care they deserve.
                  </p>
                </div>
                {/* Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-6  ">
                  {/* 24x7 Service */}
                  <div className="flex items-center gap-4 bg-green-100 rounded-2xl p-4 ">
                    <div className="bg-green-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                      <AiOutlineClockCircle />
                    </div>
                    <span className="text-slate-800 font-semibold text-lg">24x7 Service</span>
                  </div>

                  {/* Expert Doctors */}
                  <div className="flex items-center gap-4 bg-blue-100 rounded-2xl p-4 ">
                    <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                      <FaUserMd />
                    </div>
                    <span className="text-slate-800 font-semibold text-lg">Expert Doctors</span>
                  </div>

                  {/* Emergency Care */}
                  <div className="flex items-center gap-4 bg-purple-100 rounded-2xl p-4 ">
                    <div className="bg-purple-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                      <MdLocalHospital />
                    </div>
                    <span className="text-purple-800 font-semibold text-lg">Emergency Care</span>
                  </div>

                  {/* Modern Technology */}
                  <div className="flex items-center gap-4 bg-yellow-100 rounded-2xl p-4 ">
                    <div className="bg-yellow-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                      <MdMedicalServices />
                    </div>
                    <span className="text-yellow-800 font-semibold text-lg">Modern Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
