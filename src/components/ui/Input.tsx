import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`p-2 border rounded-md w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${className}`}
    />
  );
};