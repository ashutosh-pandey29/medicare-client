import { FaFolderOpen } from "react-icons/fa";

export const NoDataFound = ({ message = "No data found." }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 text-gray-500 mt-20">
      <FaFolderOpen size={50} className="mb-3" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

