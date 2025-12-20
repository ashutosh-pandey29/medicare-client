import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        The page you are looking for does not exist or has been moved. Try going back to the home page.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Go to Home
      </NavLink>
    </div>
  );
};

