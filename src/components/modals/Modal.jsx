import { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

export const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-gray-900/90 md:p-4 p-1 overflow-y-auto
              `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()} className="animate-scaleIn">
          {data.content}
        </div>
      </div>
    </>
  );
};
