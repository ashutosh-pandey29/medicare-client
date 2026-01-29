import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Dropdown } from "../../../UI/Dropdown";

export const CardRow = ({ status, title, message, actions = [] }) => {
  const statusStyles = {
    confirmed: {
      border: "border-blue-500",
      badge: "bg-blue-100 text-blue-700",
    },
    completed: {
      border: "border-green-500",
      badge: "bg-green-100 text-green-700",
    },
    rejected: {
      border: "border-red-500",
      badge: "bg-red-100 text-red-700",
    },
    pending: {
      border: "border-yellow-500",
      badge: "bg-yellow-100 text-yellow-700",
    },
    upcoming: {
      border: "border-red-500",
      badge: "bg-red-600 text-white",
    },
  };

  const styles = statusStyles[status] || {
    border: "border-gray-300",
    badge: "bg-gray-100 text-gray-700",
  };

  // console.log(actions);

  return (
    <div className={`bg-white  rounded border-l-4  ${styles.border} transition hover:bg-zinc-50`}>
      {/* Header */}
      <div className=" p-3 border-zinc-100 rounded">
        <div className="flex justify-between items-start">
          {/* Left side: status or placeholder */}
          {status ? (
            <span className={`px-3 py-1 rounded text-xs font-semibold capitalize ${styles.badge}`}>
              {status}
            </span>
          ) : (
            <div />
          )}

          {/* Right side: dropdown always */}

          {actions.length > 0 && <Dropdown actions={actions} />}
        </div>

        <div className="flex flex-col   items-start ">
          <div>
            <h3 className="text-base font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
