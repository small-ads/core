import React from 'react';
import { ButtonStyles } from './button.style';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  submit?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
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
  size = 'md',
  fullWidth = false,
  icon,
}: ButtonProps) {
  return (
    <ButtonStyles fullWidth={fullWidth}>
      <button
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type} ${size}`}
        style={style}
      >
        {icon && <span>{icon}</span>}
        {children}
      </button>
    </ButtonStyles>
  );
}
