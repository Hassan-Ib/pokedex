import React from "react";

const useModal = () => {
  const [isModalOpen, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  const openModal = () => {
    setOpenModal(true);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
