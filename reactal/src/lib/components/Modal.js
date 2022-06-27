import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Modal.css";
import { CSSTransition } from "react-transition-group";
import { faCircleXmark } from '@fortawesome/free-brands-svg-icons'


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

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
            <div className="modal-close_cross">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={props.onClose}
              />
            </div>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">{props.footer}</div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
