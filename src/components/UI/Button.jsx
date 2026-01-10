export const Button = ({
  type = "button",
  disabled,
  label,
  variant = "primary",
  size = "md",
  onClick,
  customCss,
}) => {
  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "border border-green-600 text-green-700 hover:bg-green-50",
    view: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    submit: "bg-green-700 hover:bg-green-800 text-white",
    light: "bg-zinc-50 text-gray-800 border border-zinc-100",
    outline:
      "border border-green-600 text-green-700 hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-green-300",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  const sizeStyles = {
    xs: "px-3 py-1 text-sm",
    sm: "px-5 py-2 text-base",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
    rounded font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
    ${sizeStyles[size]} 
    ${
      disabled
        ? "cursor-not-allowed opacity-60"
        : "cursor-pointer hover:shadow-xl hover:-translate-y-1 active:scale-95 active:shadow-md"
    }
    ${styles[variant]} ${customCss}
  `}
    >
      {label}
    </button>
  );
};
