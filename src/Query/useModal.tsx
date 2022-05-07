import React from "react";

// type Props = {};

const useModal = () => {
  const [isModalOpen, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  const openModal = () => {
    setOpenModal(true);
    // console.log("open modal", isModalOpen);
  };

  React.useEffect(() => {
    // console.log("useEffect");
    function handleKeyDownOpenModal(e: KeyboardEvent) {
      if (e.ctrlKey && e.code === "KeyK") {
        e.preventDefault();
        // console.log("control + l");
        openModal();
      }
    }

    function handleKeyDowncloseModal(e: KeyboardEvent) {
      // console.log("keydown", e.key);
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDownOpenModal);
    if (isModalOpen) {
      // if modal is open
      document.addEventListener("keydown", handleKeyDowncloseModal);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDowncloseModal);
      document.removeEventListener("keydown", handleKeyDownOpenModal);
    };
  });

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
