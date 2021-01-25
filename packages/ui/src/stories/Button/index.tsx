import React from 'react';
import { ButtonStyles } from './button.style';

export interface ButtonProps {
  type: 'primary' | 'secondary';
  id: string;
  htmlType: 'button' | 'submit' | 'reset' | undefined;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean | undefined;
  style: object;
  className: string;
  children: React.ReactNode;
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
      <button
      // eslint-disable-next-line react/button-has-type
        type={htmlType}
        id={id}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type}`}
        style={style}
      >
        {children}
      </button>
    </ButtonStyles>
  );
}

Button.defaultProps = {
  id: null,
  onClick: () => {},
  type: 'primary',
  htmlType: 'button',
  style: {},
  disabled: false,
  className: '',
};
