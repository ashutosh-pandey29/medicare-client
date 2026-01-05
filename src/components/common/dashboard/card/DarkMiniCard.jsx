import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

export const DarkMiniCard = ({ icon, value, title, trend = "+12.5%", isNegative = false }) => {
  return (
    <div className="group relative bg-linear-to-b from-[#111827] to-[#0B1220] border border-[#1F2937] rounded-xl p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.3)] overflow-hidden">
      {/* Decorative Background Glow on Hover */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          {/* Icon Container */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-2xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>

          {/* Trend Badge */}
          {trend && (
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${
                isNegative ? "bg-red-500/10 text-red-400" : "bg-emerald-500/10 text-emerald-400"
              }`}
            >
              {isNegative ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
              {trend}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-1">
          <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-50 transition-colors">
            {value}
          </h3>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</p>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
};
