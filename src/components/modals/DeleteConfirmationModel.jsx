import React, { useState } from "react";
import { FiAlertTriangle, FiTrash2 } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";

export const DeleteConfirmationModel = ({ onClose, onConfirm, title, content }) => {
  const [confirmText, setConfirmText] = useState("");

  const isConfirmed = confirmText === "DELETE";

  

  return (
    <>
      <div className="w-full p-3 bg-white rounded-xl shadow-2xl max-w-sm ">
        <div className="flex items-center justify-between border-b border-b-zinc-100 p-2  shrink-0">
          <div
            id="modalTitle"
            className="text-base font-bold text-gray-800 sm:text-xl flex  items-center gap-2"
          >
            <FiAlertTriangle className="text-red-600" size={20} />
            {title}
          </div>

          <button
            type="button"
            className=" w-8 h-8  text-gray-600
              flex items-center justify-center cursor-pointer "
            aria-label="Close"
            onClick={onClose}
          >
            <RiCloseLargeLine className="text-xl" />
          </button>
        </div>

        {/* Message */}

        <div>{content}</div>

        {/* Type DELETE */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type <span className="font-mono text-red-600">"DELETE"</span> to confirm
          </label>
          <input
            type="text"
            name="confirmText"
            value={confirmText}
            placeholder="DELETE"
            onChange={(e) => setConfirmText(e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-gray-300 outline-0
            focus:outline-none focus:ring-2 focus:ring-red-500/40
            focus:border-red-500 transition"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700
            bg-gray-100 hover:bg-gray-200 rounded-md transition"
          >
            Cancel
          </button>

          <button
            disabled={!isConfirmed}
            onClick={onConfirm}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md transition
            ${isConfirmed ? "bg-red-600 hover:bg-red-700" : "bg-red-300 cursor-not-allowed"}`}
          >
            <FiTrash2 size={16} />
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};
