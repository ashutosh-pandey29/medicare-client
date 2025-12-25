import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

export const DoctorCard = ({ doctor }) => {
  return (
    <>
      <div className="group relative overflow-hidden rounded bg-linear-to-br from-white to-gray-50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30 z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>

        <div className="relative p-6 z-10">
          {/* Top Section: Image + Basic Info */}
          <div className="flex items-start gap-5 mb-6">
            {/* Profile Image with Badge */}
            <div className="relative shrink-0">
              <div className="relative w-18 h-18 rounded-2xl overflow-hidden ring-4 ring-green-500 ring-offset-4 ring-offset-white shadow-lg">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Verified Badge */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1.5 shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Name + Specialty */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-1 truncate">{doctor.name}</h3>
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded text-[10px] font-medium shadow-sm">
                {/* <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> */}
                {doctor.service_name}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {/* Experience */}

            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm text-gray-600 font-medium">Experience</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{doctor.experience}</span>
            </div>

            {/* Education */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                <span className="text-sm text-gray-600 font-medium">Education</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{doctor.education}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">{doctor.description}</p>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-5"></div>

          {/* Footer: Contact + Social */}
          <div className="flex items-center  justify-between gap-2 ">
            {/* Phone Button */}
            <a
              href={`tel:${doctor.phone || ""}`}
              className="flex items-center gap-2 bg-green-500 text-white px-2 py-1 md:px-4 md:py-2.5 rounded font-medium shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 group/phone"
            >
              <BsFillTelephoneFill className="text-sm group-hover/phone:animate-bounce" />
              <span className="text-sm">{doctor.phone || "+91 9876543210"}</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-2">
              <IconButton
                href={"#"}
                Icon={FaFacebookF}
                variant="outline"
                customClass={"hover:bg-blue-600 hover:text-white "}
              />
              <IconButton
                href={"#"}
                Icon={FaInstagram}
                variant="outline"
                customClass={"hover:from-purple-600 hover:to-pink-600 hover:text-white"}
              />
              <IconButton
                href={"#"}
                Icon={FaWhatsapp}
                variant="outline"
                customClass={"hover:bg-green-600 hover:text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
