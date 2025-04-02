import React from 'react';
import { IButtonProps } from 'types/components';

export const Button: React.FC<IButtonProps> = ({
  name,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
