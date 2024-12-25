import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      {...props}
      className={`p-2 border rounded-md w-full h-24 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${className}`}
    />
  );
};