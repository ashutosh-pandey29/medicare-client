export const MiniCard = ({ icon, title, subText }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top linear Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />

      {/* Soft Decorative Glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl transition-transform duration-500 group-hover:scale-125" />

      <div className="relative flex items-center gap-4">
        {/* Icon Container */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 text-white text-xl shadow-md transition-all duration-300 group-hover:scale-105">
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 leading-tight">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{subText}</p>
        </div>
      </div>
    </div>
  );
};
