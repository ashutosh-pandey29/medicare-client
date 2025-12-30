import { FaUserClock } from "react-icons/fa6";

export const MiniCard = ({ icon, title, subText }) => {
  return (
    <>
    
        <div className="bg-zinc-100 rounded  p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
          {/* Header with icon */}
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-2xl">
              {icon}
            </div>
          </div>

          {/* Value */}
          <div className="text-2xl font-bold text-gray-800 mb-1">{subText}</div>

          {/* Label */}
          <div className="text-sm text-gray-500 mb-2">{title}</div>

          {/* Change */}
        <div className="flex items-center text-sm font-medium text-green-600 gap-1.5">
          {" "} <FaUserClock className="text-yellow-500" size={22} />{" "} 12.5% Growth Rate
          </div>
      </div>
      

    </>
  );
};
