export const Button = ({ type = "button", label, variant = "primary", onClick }) => {
  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "border border-green-600 text-green-700 hover:bg-green-50",
    view: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    submit: "bg-green-700 hover:bg-green-800 text-white",
    light: "bg-zinc-100 text-gray-800",
      outline:"border border-green-600 text-green-700 hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-green-300",


    
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={` px-6 py-3 rounded cursor-pointer font-semibold
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1
    active:scale-95 active:shadow-md
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2   ${styles[variant]}`}
    >
      {label}
    </button>
  );
};
