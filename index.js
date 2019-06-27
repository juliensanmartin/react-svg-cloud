"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DummyComponent = DummyComponent;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DummyComponent(props) {
  return _react["default"].createElement("div", {
    className: _style["default"].cloud - container
  }, _react["default"].createElement("div", {
    className: _style["default"].cloud - circle
  }), _react["default"].createElement("svg", {
    width: "0",
    height: "0"
  }, _react["default"].createElement("filter", {
    id: "filter"
  }, _react["default"].createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: ".01",
    numOctaves: "10"
  }), _react["default"].createElement("feDisplacementMap", {
    "in": "SourceGraphic",
    scale: "180"
  }))));
}
