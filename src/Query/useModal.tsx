import React from "react";

// type Props = {};

const useModal = () => {
  const [isModalOpen, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  const openModal = () => {
    // console.log("open modal", isModalOpen);

    setOpenModal(true);
    // console.log("open modal", isModalOpen);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
