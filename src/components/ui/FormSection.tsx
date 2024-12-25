import React, { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children, action }) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
};