import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Pagination = ({
  page = 1,
  totalPages = 1,
  onPageChange,
  theme = "dark",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`w-full px-4 py-3 flex items-center justify-between rounded-md
        ${isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"}
      `}
    >
      {/* Page Info */}
      <div className="text-sm">
       Showing  Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className={`h-9 w-9 flex items-center justify-center rounded-md transition cursor-pointer
            ${
              isDark
                ? "hover:bg-gray-700 disabled:bg-gray-800"
                : "hover:bg-gray-100 disabled:bg-gray-100"
            }
            disabled:opacity-40 disabled:cursor-not-allowed
          `}
        >
          <FiChevronLeft />
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className={`h-9 w-9 flex items-center justify-center rounded-md transition cursor-pointer
            ${
              isDark
                ? "hover:bg-gray-700 disabled:bg-gray-800"
                : "hover:bg-gray-100 disabled:bg-gray-100"
            }
            disabled:opacity-40 disabled:cursor-not-allowed
          `}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
