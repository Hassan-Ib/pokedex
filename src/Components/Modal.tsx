import React from "react";
import ReactDom from "react-dom";
type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const modalNode = document.getElementById("modal");
const Modal = ({ isModalOpen, closeModal, children }: Props) => {
  if (!modalNode || !isModalOpen) return null;
  return ReactDom.createPortal(
    <section
      className={`fixed inset-0  ${
        !isModalOpen ? "close-modal" : "open-modal"
      } `}
    >
      <div
        onClick={closeModal}
        className="overlay absolute inset-0 bg-black/30"
      ></div>
      {children}
    </section>,
    modalNode
  );
};

export default Modal;
