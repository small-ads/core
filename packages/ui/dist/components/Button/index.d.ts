import React from 'react';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  submit?: boolean;
  disabled?: boolean;
  style?: object;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
export declare function Button({
  type,
  submit,
  disabled,
  style,
  className,
  children,
  onClick,
}: ButtonProps): JSX.Element;
