import React from "react";
import { useNavigate } from "react-router-dom";
// import { DoctorProfileForm } from "../../components/forms/DoctorProfileForm";

export const CreateProfile = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Card */}

          <div
            className="relative w-full max-w-full rounded overflow-hidden shadow z-10"
            style={{
              background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
            }}
          >
            {/* Decorative medical cross patterns */}
            <div className="absolute top-4 right-8 w-16 h-16 opacity-10">
              <div className="absolute w-4 h-16 bg-white left-6"></div>
              <div className="absolute w-16 h-4 bg-white top-6"></div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10">
              <div className="absolute w-3 h-12 bg-white left-4.5"></div>
              <div className="absolute w-12 h-3 bg-white top-4.5"></div>
            </div>

            {/* Pulse line decoration */}
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-5 z-0"
              viewBox="0 0 1000 200"
            >
              <path
                d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
            </svg>

            {/* Main Content */}
            <div className="relative z-10 p-1 md:p-4">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center lg:w-6xl">
                  <div className="ml-1 w-full ">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h2 className="text-base md:text-2xl lg:text-4xl font-bold text-white">
                        Complete Your Professional Profile
                      </h2>

                    </div>

                    <p className="text-gray-100 text-base  font-semibold">
                      Add and manage your personal details, medical qualifications, experience, and
                      availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom wave decoration */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
              <path
                d="M0,40L80,45C160,50,320,60,480,58C640,56,800,42,960,40C1120,38,1280,48,1360,53L1440,58L1440,100L0,100Z"
                fill="rgba(255,255,255,0.15)"
              />
            </svg>
          </div>



          {/* form */}

          <DoctorProfileForm/>


        </div>
      </div>
    </>
  );
};
