import { useModal } from "../../context/ModalContext";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const BaseModal = () => {
  const { isOpen, modalContent, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // restore scrolling
    }

    // cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="model fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-1.5  md:p-5">
        <div className="model-container shadow-2xl rounded-2xl bg-linear-to-r from-blue-50 to-blue-100   sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto overflow-auto p-1">
          <div className="model-header  border-b border-blue-100 flex justify-between items-center p-3 ">
            <h1 className="text-xl font-bold "> </h1>
            <button className="text-2xl cursor-pointer" onClick={closeModal}>
              <IoIosCloseCircleOutline />
            </button>
          </div>

          {/* model body */}

          <div className="model-body p-3 h-[80vh] ">{modalContent}</div>
        </div>
      </div>
    </>
  );
};
