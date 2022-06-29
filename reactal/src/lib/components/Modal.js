import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import "./styles/Modal.css";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  const closeOnEscapeKayDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKayDown);
    return function cleanup() {
      document.body.addEventListener("keydown", closeOnEscapeKayDown);
    };
  });

  const header = () => {
    if (props.title) {
      return (
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
      );
    }
  };

  const footer = () => {
    if (props.footer) {
      return <div className="modal-footer">{props.footer}</div>;
    }
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {header}
          <div className="modal-close" onClick={props.onClose}></div>
          <div className="modal-body">{props.children}</div>
          {footer}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
