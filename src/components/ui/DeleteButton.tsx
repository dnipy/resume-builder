import React from 'react';
import { Trash2 } from 'lucide-react';

interface DeleteButtonProps {
  onClick: () => void;
  className?: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`text-red-500 hover:text-red-600 p-1 transition-colors ${className}`}
    >
      <Trash2 size={18} />
    </button>
  );
};