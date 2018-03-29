'use strict';

exports.__esModule = true;
exports.DCInputMasked = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactInputMask = require('react-input-mask');

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _DCInputBase = require('./DCInputBase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DCInputMasked = exports.DCInputMasked = function (_Component) {
    _inherits(DCInputMasked, _Component);

    function DCInputMasked() {
        _classCallCheck(this, DCInputMasked);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DCInputMasked.prototype.render = function render() {
        var _props = this.props,
            input = _props.input,
            mask = _props.mask,
            maskChar = _props.maskChar,
            formatChars = _props.formatChars,
            alwaysShowMask = _props.alwaysShowMask,
            props = _objectWithoutProperties(_props, ['input', 'mask', 'maskChar', 'formatChars', 'alwaysShowMask']);

        var TagName = input;

        return _react2.default.createElement(TagName, _extends({
            renderInput: function renderInput(baseInputProps) {
                return _react2.default.createElement(_reactInputMask2.default, _extends({}, baseInputProps, {
                    mask: mask,
                    maskChar: maskChar,
                    formatChars: formatChars,
                    alwaysShowMask: alwaysShowMask
                }));
            }
        }, props));
    };

    return DCInputMasked;
}(_react.Component);

DCInputMasked.displayName = 'Input.Masked';
DCInputMasked.propTypes = (0, _objectAssign2.default)({}, _DCInputBase.DCInputBase.propTypes, _reactInputMask2.default.propTypes, {
    input: _propTypes2.default.func
});
DCInputMasked.defaultProps = (0, _objectAssign2.default)({}, _DCInputBase.DCInputBase.defaultProps, _reactInputMask2.default.defaultProps, {
    input: _DCInputBase.DCInputBase
});