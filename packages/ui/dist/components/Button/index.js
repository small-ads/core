"use strict";
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
var button_style_1 = require("./button.style");
function Button(_a) {
    var _b = _a.type, type = _b === void 0 ? 'primary' : _b, _c = _a.submit, submit = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.style, style = _e === void 0 ? {} : _e, _f = _a.className, className = _f === void 0 ? '' : _f, children = _a.children, onClick = _a.onClick;
    return (<button_style_1.ButtonStyles>
      <button type={submit ? 'submit' : 'button'} disabled={disabled} onClick={onClick} className={className + " " + type} style={style}>
        {children}
      </button>
    </button_style_1.ButtonStyles>);
}
exports.Button = Button;
