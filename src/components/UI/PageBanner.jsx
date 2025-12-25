import React from "react";
import pageBanner from "../../assets/hospitals/Banner-3.png";

export const PageBanner = ({ title, subText }) => {
  return (
    <>
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-900 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pageBanner})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-4 leading-tight text-white">
            {title}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl  mx-auto leading-relaxed">
            {subText}
          </p>
        </div>
      </div>
    </>
  );
};
