import React from 'react';
import { ButtonStyles } from './button.style';
export function Button({ type = 'primary', submit = false, disabled = false, style = {}, className = '', children, onClick, }) {
    return (React.createElement(ButtonStyles, null,
        React.createElement("button", { type: submit ? 'submit' : 'button', disabled: disabled, onClick: onClick, className: `${className} ${type}`, style: style }, children)));
}
