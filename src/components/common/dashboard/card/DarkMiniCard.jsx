import { FaUserClock } from "react-icons/fa6";

export const DarkMiniCard = ({ icon, value, title, trend = "+12.5%" }) => {
  return (
    <div className="bg-[#0B1220] border border-[#1F2937] rounded-md p-5  hover:border-blue-500/20 hover:shadow-lg transition-transform transform hover:-translate-y-1 ">
  
      {/* Icon */}
      <div className="flex items-center justify-start mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 text-2xl">
          {icon}
        </div>
      </div>

      {/* Value */}
      <div className="text-2xl font-bold text-white mb-1">{value}</div>

      {/* Title */}
      <div className="text-sm text-slate-400 mb-3">{title}</div>

      {/* Trend / Growth */}
      <div className="flex items-center text-xs font-medium text-emerald-400 gap-2">
        {trend && <span>{trend}</span>}
      </div>
    </div>
  );
};
