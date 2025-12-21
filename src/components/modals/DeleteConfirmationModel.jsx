import React from "react";
import { FiAlertTriangle, FiTrash2 } from "react-icons/fi";

export const DeleteConfirmationModel = ({ onCancel, onConfirm, title, message }) => {
  return (
    <>
      <div className="bg-white  p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <FiAlertTriangle className="text-red-600" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <FiTrash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
