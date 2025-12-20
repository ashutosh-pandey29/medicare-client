import { useState } from "react";

export const useModal = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (content, title) => {
    setModalData({content, title});
    console.log(modalData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return { modalData, openModal, closeModal };
};
