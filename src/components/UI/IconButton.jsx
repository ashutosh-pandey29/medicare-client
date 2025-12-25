import React from "react";

export const IconButton = ({ href, Icon, label, size, onClick, target, customClass }) => {
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const baseClass = `w-10 h-10 flex items-center justify-center rounded bg-pink-100 text-pink-600 hover:bg-linear-to-br  transition-all duration-300 hover:scale-110 ${customClass}  ${sizes[size]} `;

  if (href) {
    return (
      <a href={href} target={target} className={baseClass}>
        {Icon && <Icon className="text-lg" />}
        {label && <span>{label}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {Icon && <icon className="text-sm" />}
      {label && <span>{label}</span>}
    </button>
  );
};
