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
						_react2.default.createElement("path", { className: "cls-1", d: "M20,0H1A1,1,0,0,0,0,1V31a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V1A1,1,0,0,0,20,0ZM9,30V24h3v6Zm10,0H14V23a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v7H2V2H19Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M31,16H24a1,1,0,0,0,0,2h6V30H24a1,1,0,0,0,0,2h7a1,1,0,0,0,1-1V17A1,1,0,0,0,31,16Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M5.5,10.34h3a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1v3A1,1,0,0,0,5.5,10.34Zm1-3h1v1h-1Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M12.5,10.34h3a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1v3A1,1,0,0,0,12.5,10.34Zm1-3h1v1h-1Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M5.5,16.84h3a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1v3A1,1,0,0,0,5.5,16.84Zm1-3h1v1h-1Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M12.5,16.84h3a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1v3A1,1,0,0,0,12.5,16.84Zm1-3h1v1h-1Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M27.5,25a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1Zm-2-3h1v1h-1Z" })
				);
		};

		return IconSVG;
}(_react.Component);

exports.default = IconSVG;