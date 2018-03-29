'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _InputBase = require('./InputBase');

var _InputBase2 = _interopRequireDefault(_InputBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputDate = function (_Component) {
    _inherits(InputDate, _Component);

    function InputDate() {
        _classCallCheck(this, InputDate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    InputDate.prototype.render = function render() {
        var _props = this.props,
            inputClassName = _props.inputClassName,
            props = _objectWithoutProperties(_props, ['inputClassName']); // eslint-disable-line react/prop-types

        return _react2.default.createElement(_InputBase2.default, _extends({ type: 'text', inputClassName: (0, _classnames2.default)('m-input-date', inputClassName) }, props));
    };

    return InputDate;
}(_react.Component);

InputDate.displayName = 'Input.Date';
InputDate.propTypes = _InputBase2.default.propTypes;
InputDate.defaultProps = (0, _objectAssign2.default)({}, _InputBase2.default.defaultProps, {
    type: 'text',
    placeholder: 'TT.MM.YYYY'
});
exports.default = InputDate;