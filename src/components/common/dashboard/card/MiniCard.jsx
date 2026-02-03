export const MiniCard = ({ icon, title, subText }) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl 
        bg-white/70 backdrop-blur-xl
        p-6 border border-gray-100
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
      "
    >
      {/* Gradient glow */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-linear-to-br from-zinc-500/10 via-amber-500/10 to-purple-500/10
        "
      />

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div
          className="
            w-14 h-14 flex items-center justify-center
             bg-gray-100
            text-white text-2xl
            rounded-xl
          "
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{subText}</h2>

        <p className="mt-1 text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};
