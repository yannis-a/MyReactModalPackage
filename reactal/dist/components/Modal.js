"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireWildcard(require("react"));

require("./styles/Modal.css");

var _reactTransitionGroup = require("react-transition-group");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = props => {
  const closeOnEscapeKayDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  (0, _react.useEffect)(() => {
    document.body.addEventListener("keydown", closeOnEscapeKayDown);
    return function cleanup() {
      document.body.addEventListener("keydown", closeOnEscapeKayDown);
    };
  });

  const header = () => {
    if (props.title) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "modal-title"
      }, props.title));
    }
  };

  const footer = () => {
    if (props.footer) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-footer"
      }, props.footer);
    }
  };

  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: props.show,
    unmountOnExit: true,
    timeout: {
      enter: 0,
      exit: 300
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, header, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close",
    onClick: props.onClose
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children), footer))), document.getElementById("root"));
};

var _default = Modal;
exports.default = _default;