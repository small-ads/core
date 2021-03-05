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
  size?: 'small' | 'medium' | 'large';
  full?: boolean;
  icon?: React.RefAttributes<SVGSVGElement>;
}

export function Button({
  type = 'primary',
  submit = false,
  disabled = false,
  style = {},
  className = '',
  children,
  onClick,
  size = 'large',
  full = false,
  icon,
}: ButtonProps) {
  const block = full ? 'block' : '';
  return (
    <ButtonStyles>
      <button
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type} ${size} ${block}`}
        style={style}
      >
        {icon}
        {children}
      </button>
    </ButtonStyles>
  );
}
