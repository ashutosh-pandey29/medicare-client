import React from "react";

export const Settings = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto  ">
        {/* Header */}

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
          <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-0" viewBox="0 0 1000 200">
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
                      Account Management
                    </h2>
                  </div>

                  <p className="text-gray-100 text-base  font-semibold">
                    Review and update permitted account information. Certain settings are controlled
                    by the administrator.
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

        <div className=" rounded mt-5  p-6 space-y-6 bg-white">
          {/* Auto Approval */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 font-semibold">Auto Appointment Approval</h3>
              <p className="text-sm text-gray-500">
                Automatically approve new appointment requests.
              </p>
            </div>

            {/* Toggle UI (static) */}

            <div className="flex items-center gap-2">
              <input type="checkbox" id="autoApproval" className="sr-only peer" />
              <label
                htmlFor="autoApproval"
                className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer
               before:absolute before:left-0 before:top-0.5 before:w-5 before:h-5 
               before:bg-white before:rounded-full before:transition-transform 
               peer-checked:bg-green-500 peer-checked:before:translate-x-6
               hover:shadow-sm"
              ></label>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Daily Appointment Limit */}

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 font-semibold"> Daily Appointment Limit</h3>
              <p className="text-sm text-gray-500">
                Set the maximum number of appointments you can handle per day.
              </p>
            </div>

            <select
              name="appointmentLimit"
              id="appointmentLimit"
              className="px-2 py-2 text-lg border border-zinc-200 rounded outline-0 "
            >
              <option value="15">25</option>
              <option value="15">50</option>
              <option value="15">75</option>
              <option value="15">100</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};
