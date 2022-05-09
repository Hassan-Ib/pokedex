import React from "react";
import ReactDom from "react-dom";
import getActiveElements from "../utils/getActiveElement";
type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  children: React.ReactNode;
};

const modalNode = document.getElementById("modal");
const Modal = ({ isModalOpen, closeModal, openModal, children }: Props) => {
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

  function trapFocus(
    e: KeyboardEvent,
    activeElements: NodeListOf<HTMLElement>
  ) {
    const activeElementLength = activeElements.length;

    // if shift key and Tab key and e.target === activeElements[0] return focus to activeElement[len - 1]

    if (e.shiftKey && e.key === "Tab" && e.target === activeElements[0]) {
      e.preventDefault();
      activeElements[activeElementLength - 1].focus();
    }

    if (
      !e.shiftKey &&
      e.key === "Tab" &&
      e.target === activeElements[activeElementLength - 1]
    ) {
      e.preventDefault();
      activeElements[0].focus();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDownOpenModal);
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDowncloseModal);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDowncloseModal);
      document.removeEventListener("keydown", handleKeyDownOpenModal);
    };
  });

  React.useEffect(() => {
    if (!isModalOpen || !modalNode) return;
    // if modal is not open or modalNode is not defined
    const lastActiveBeforeModal = document.activeElement as HTMLElement;

    document.body.classList.add("fix-height");
    let handleTrapFocus: (e: KeyboardEvent) => void;

    // get all focusable elements in modal
    const activeElements = getActiveElements(modalNode);

    // if modal is open, trap focus to modal
    if (activeElements.length > 0) {
      activeElements[0].focus();
      handleTrapFocus = (e: KeyboardEvent) => {
        trapFocus(e, activeElements);
      };
      document.addEventListener("keydown", handleTrapFocus);
    }

    return () => {
      if (lastActiveBeforeModal) {
        // if there was an active element before modal was open return focus to it
        lastActiveBeforeModal.focus();
      }
      // remove trap focus when modal is closed
      document.removeEventListener("keydown", handleTrapFocus);
      document.body.classList.remove("fix-height");
    };
  });

  if (!modalNode) return null;
  return ReactDom.createPortal(
    <section
      aria-hidden={!isModalOpen} // if modal is open, aria-hidden is false
      className={`fixed inset-0 close-modal  ${
        isModalOpen ? "open-modal" : ""
      } `}
    >
      <div
        onClick={closeModal}
        className="overlay absolute inset-0 bg-black/30"
      ></div>
      <div className="children ">{children}</div>
    </section>,
    modalNode
  );
};

export default Modal;
