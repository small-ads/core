import React from "react";
/* import './button.css'; */
import ButtonStyles from "./button.style";

export interface ButtonProps {
  type: string;
  id: string;
  htmlType: string;
  onClick: any;
  disabled: boolean | undefined;
  style: Object;
  className: string;
  children: any;
}

export function Button({
  type,
  id,
  htmlType,
  onClick,
  children,
  disabled,
  style,
  className,
}: ButtonProps) {
  return (
    <ButtonStyles>
      {/* eslint-disable-next-line */}
      <button
        type={htmlType}
        id={id}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type}`}
        style={style}>
        {children}
      </button>
    </ButtonStyles>
  );
}

Button.defaultProps = {
  id: null,
  onClick: () => {},
  type: "primary",
  htmlType: "button",
  style: {},
  disabled: false,
  className: "",
};
