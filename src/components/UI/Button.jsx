export const Button = ({ type, variant, customClass, children }) => {
  const initialStyle = "px-3 py-2 border-none rounded cursor-pointer";
  const buttonsVariant = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    success: "bg-green-600 text-white hover:bg-green-700",
    info: "bg-zinc-100 text-black hover:bg-orange-500",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <>
      <button type={type} className={`${initialStyle} ${buttonsVariant[variant]} ${customClass} `}>
        {children}
      </button>
    </>
  );
};
