import { FaFileDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

export const InfoCard = ({ title, subText, status, buttons }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 w-full space-y-3 md:space-y-0">
        {/* Left side */}
        <div className="flex-1 space-y-2">
          <p className="text-base font-semibold text-gray-800"> {title}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-sm text-gray-500">{subText}</span>
            <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-[10px] sm:text-xs font-semibold w-fit">
              {status}
            </span>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex gap-2 mt-2 md:mt-0">
          {buttons &&
            buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                className={`px-3 py-2 text-sm rounded-lg text-white transition-colors ${
                  btn.color === "blue"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : btn.color === "orange"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                {btn.icon} {btn.text && <span className="ml-1">{btn.text}</span>}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};
