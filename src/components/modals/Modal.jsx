import { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

export const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/70 md:p-4  overflow-y-auto
  transform transition-all duration-1000 ease-out
              `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        onClick={onClose}
      >
        <div
          className={`bg-white md:rounded-lg w-full md:max-w-2xl h-full md:h-auto
          transform transition-all duration-10000
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-b-zinc-100 p-4 md:p-6 shrink-0">
            <h2 id="modalTitle" className="text-base font-bold text-gray-800 sm:text-xl pr-8">
              {data.title}
            </h2>

            <button
              type="button"
              className="border w-8 h-8 rounded-full  bg-red-500 hover:bg-red-700 transition-colors text-white
               focus:outline-none shrink-0  flex items-center justify-center cursor-pointer"
              aria-label="Close"
              onClick={onClose}
            >
              <RiCloseLargeLine className="text-xl" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-6">{data.content}</div>
        </div>
      </div>
    </>
  );
};
