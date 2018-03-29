"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var IconSVG = function (_Component) {
  _inherits(IconSVG, _Component);

  function IconSVG() {
    _classCallCheck(this, IconSVG);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  IconSVG.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      _extends({ viewBox: "0 0 32 32", "data-name": "Ebene 1" }, this.props),
      _react2.default.createElement("defs", null),
      _react2.default.createElement("path", { className: "cls-1", d: "M29,3H9.48a3,3,0,0,0-3,3V7.28C3.15,8.13,0,10.95,0,16.89v4.45A7.6,7.6,0,0,0,7.52,29H17.3a3,3,0,0,0,2.77-4h2.44a3,3,0,0,0,2.77-4H29a3,3,0,0,0,3-3V6A3,3,0,0,0,29,3ZM8.52,6a1,1,0,0,1,1-1H29a1,1,0,0,1,1,1V8.33H15.78a3.84,3.84,0,0,0-3-1.33H8.52Zm15,16a1,1,0,0,1-1,1H14a1,1,0,1,0,0,2H17.3a1,1,0,0,1,0,2H7.52A5.6,5.6,0,0,1,2,21.33V16.89C2,9.57,7.22,9,8.83,9h3.91c.62,0,1.61.27,1.61,1v.67c0,.79-1.05,1-1.61,1H10.13a1,1,0,0,0-1,.73c-.36,1.28-1.55,3.94-3,3.94a1,1,0,1,0,0,2l.34,0A3,3,0,0,0,9.48,21h13A1,1,0,0,1,23.48,22ZM29,19H9.48a1,1,0,0,1-1-1v-.59a9.29,9.29,0,0,0,2.33-3.74h1.88c2.09,0,3.61-1.26,3.61-3v-.33H30V18A1,1,0,0,1,29,19Z" }),
      _react2.default.createElement("path", { className: "cls-1", d: "M27.39,12.44h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;