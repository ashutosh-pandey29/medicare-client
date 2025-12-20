import { useEffect, useState } from "react";

export const WelcomeCard = ({ adminName = "Admin" }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = dateTime.getHours();

  const getGreeting = () => {
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div
      className="relative w-full h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg mb-6"
      style={{
        backgroundImage: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white">
        <h1 className="text-2xl md:text-3xl font-bold">
          {getGreeting()}, {adminName} 👋
        </h1>

        <p className="mt-1 text-sm md:text-base text-gray-200">
          {dateTime.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="text-sm md:text-base text-gray-300">
          {dateTime.toLocaleTimeString("en-IN")}
        </p>

        <p className="mt-2 text-xs md:text-sm text-gray-300">
          Hope you have a productive day managing appointments & patients 🚀
        </p>
      </div>
    </div>
  );
};
