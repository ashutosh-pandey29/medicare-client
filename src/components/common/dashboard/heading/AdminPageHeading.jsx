import React from "react";

export const AdminPageHeading = ({
  title,
  subtitle,
  icon: Icon,
  rightContent,
}) => {
  return (
    <div
      className="relative w-full rounded-xl border mb-6"
      style={{
        background:
          "linear-gradient(135deg, #0B1220 0%, #111827 60%, #1E3A8A 100%)",
        borderColor: "#1F2937",
      }}
    >
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="relative z-10 px-4 py-4 md:px-8 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Left */}
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-600/20 items-center justify-center border border-blue-500/30">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
            )}

            <div>
              <h1 className="text-lg md:text-2xl font-bold text-white leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right */}
          {rightContent && (
            <div className="flex items-center gap-3 md:self-auto self-start">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
