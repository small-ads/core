import React from 'react';
import { ButtonStyles } from './button.style';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  submit?: boolean;
  disabled?: boolean;
  style?: object;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  size?: 'small' | 'medium';
  social?: 'facebook';
}

export function Button({
  type = 'primary',
  submit = false,
  disabled = false,
  style = {},
  className = '',
  children,
  onClick,
  size,
  social,
}: ButtonProps) {
  return (
    <ButtonStyles>
      <button
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type} ${size} ${social}`}
        style={style}
      >
        {children}
      </button>
    </ButtonStyles>
  );
}
