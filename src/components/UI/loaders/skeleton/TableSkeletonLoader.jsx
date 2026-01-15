import React from "react";

export const TableSkeletonLoader = () => {
  return (
    <div className="bg-gray-900 rounded-md shadow-lg mt-6">
      {/* Header Skeleton */}
      <div className="flex sm:flex-row justify-between items-start sm:items-center p-3 gap-2 sm:gap-0">
        <div className="h-7 w-40 bg-gray-700 rounded animate-pulse"></div>
        <div className="flex items-center justify-end gap-1.5 px-1">
          <div className="h-9 w-24 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-9 w-24 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      <table className="w-full table-auto border-collapse text-center">
        {/* Table Head Skeleton */}
        <thead className="bg-gray-800 text-gray-200">
          <tr className="border-b border-gray-700">
            <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
              <div className="h-4 w-28 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </th>
            <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
              <div className="h-4 w-32 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </th>
            <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
              <div className="h-4 w-32 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </th>
            <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
              <div className="h-4 w-16 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </th>
          </tr>
        </thead>

        {/* Table Body Skeleton */}
        <tbody className="text-xs sm:text-sm md:text-base">
          {[1, 2, 3, 4, 5].map((row) => (
            <tr key={row} className="border-b border-gray-700">
              <td className="px-2 py-2 sm:px-4 sm:py-4">
                <div className="h-4 w-20 bg-gray-700 rounded mx-auto animate-pulse"></div>
              </td>
              <td className="px-2 py-2 sm:px-4 sm:py-4">
                <div className="h-4 w-32 bg-gray-700 rounded mx-auto animate-pulse"></div>
              </td>
              <td className="px-2 py-2 sm:px-4 sm:py-4">
                <div className="h-4 w-24 bg-gray-700 rounded mx-auto animate-pulse"></div>
              </td>
              <td className="px-2 py-2 sm:px-4 sm:py-4">
                <div className="h-8 w-10 bg-gray-700 rounded mx-auto animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
