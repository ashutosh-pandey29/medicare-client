import React from "react";

export const UserPageHeading = ({ icon, title, subText, button }) => {
  return (
    <>
      <section className=" lg:w-6xl flex items-center p-3 gap-5 ">
        {/* icon */}
        <div
          className="hidden lg:flex w-12 h-12 md:w-14 md:h-14 rounded-xl
              bg-linear-to-br from-blue-400 to-cyan-400
              items-center justify-center text-white text-2xl md:text-3xl
              ring-1 ring-white/40 shrink-0"
        >
          {icon}
        </div>

        {/*  title+subtext  + button */}
        <div className="lg:w-6xl">
          {/* heading(title) + button  */}
          {/* title */}
         <div className="flex justify-between items-center">
  <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 relative">
    {title}
  </h1>

  {button}
</div>

          {/* subtext */}
          <p className="w-full text-sm sm:text-base text-blue-700 ">{subText}</p>
        </div>
      </section>
    </>
  );
};
