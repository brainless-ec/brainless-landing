import React, { useEffect } from "react";
import { ModalImageContainer } from "../styled-components";
import InstagramSVG from "../../assets/icons/team-instagram.svg";

const Modal = ({
  handleClose,
  show,
  modalImage,
  modalTitle,
  modalUrl,
  children,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main">
        {children}
        <ModalImageContainer
          onClick={handleClose}
          backgroundImage={modalImage}
        />
        <div className="modal-body">
          <a href={modalUrl} target="_blank" rel="noreferrer">
            <img src={InstagramSVG} alt="instagram-logo" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Modal;
