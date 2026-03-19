import { useNavigate } from "react-router-dom";

export const Maintenance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-blue-50/40 flex flex-col items-center justify-center px-6">
      {/* Top badge */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-500 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
          Scheduled Maintenance
        </span>
      </div>

      {/* Illustration */}
      <div className="mb-8 drop-shadow-sm">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" fill="#EFF6FF" />
          <circle cx="100" cy="100" r="72" fill="#DBEAFE" opacity="0.5" />

          {/* Big Gear */}
          <g transform="translate(52, 42)">
            <circle cx="38" cy="38" r="16" fill="#BFDBFE" />
            <circle cx="38" cy="38" r="8" fill="#EFF6FF" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="34.5"
                y="16"
                width="7"
                height="13"
                rx="2.5"
                fill="#3B82F6"
                transform={`rotate(${angle} 38 38)`}
              />
            ))}
          </g>

          {/* Small Gear */}
          <g transform="translate(106, 100)">
            <circle cx="24" cy="24" r="10" fill="#DBEAFE" />
            <circle cx="24" cy="24" r="5" fill="#EFF6FF" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <rect
                key={i}
                x="21"
                y="10"
                width="6"
                height="10"
                rx="2"
                fill="#60A5FA"
                transform={`rotate(${angle} 24 24)`}
              />
            ))}
          </g>

          {/* Wrench */}
          <g transform="translate(44, 106) rotate(-35, 22, 22)">
            <rect x="18" y="6" width="8" height="34" rx="4" fill="#93C5FD" />
            <circle cx="22" cy="10" r="9" fill="#3B82F6" />
            <circle cx="22" cy="10" r="4.5" fill="#EFF6FF" />
          </g>

          {/* Sparkles */}
          <circle cx="148" cy="58" r="4" fill="#93C5FD" opacity="0.7" />
          <circle cx="56" cy="148" r="3" fill="#60A5FA" opacity="0.5" />
          <circle cx="155" cy="138" r="5" fill="#BFDBFE" opacity="0.8" />
          <circle cx="44" cy="62" r="3" fill="#3B82F6" opacity="0.3" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-slate-800 text-center mb-4 tracking-tight">
        We'll be right back!
      </h1>

      <p className="text-slate-500 text-center text-[15px] max-w-md leading-relaxed mb-10">
        We're performing scheduled maintenance to improve your experience. We'll be back
        shortly.{" "}
      </p>

      {/* Divider with admin text */}
      <div className="flex items-center gap-3 w-full max-w-sm mb-6">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 whitespace-nowrap">Admin Access</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Admin login button */}
      <button
        onClick={() => navigate("/auth/login")}
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 active:scale-95 transition-all duration-200 shadow-sm"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        Admin Login
      </button>

      {/* Footer */}
      <p className="mt-14 text-xs text-slate-300">© 2024 Medicare Hospital. All rights reserved.</p>
    </div>
  );
};
