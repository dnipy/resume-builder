import React from 'react';
import { ResumeData } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Input } from '../ui/Input';
import { AddButton } from '../ui/AddButton';
import { DeleteButton } from '../ui/DeleteButton';

interface EducationFormProps {
  data: ResumeData['education'];
  onAdd: () => void;
  onDelete: (id: string) => void;
  onChange: (index: number, field: string, value: string) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({
  data,
  onAdd,
  onDelete,
  onChange,
}) => {
  return (
    <FormSection
      title="تحصیلات"
      action={<AddButton onClick={onAdd} />}
    >
      {data.map((edu, index) => (
        <div key={edu.id} className="relative border-b last:border-0 pb-4 mb-4 last:mb-0">
          <DeleteButton
            onClick={() => onDelete(edu.id)}
            className="absolute left-0 top-0"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="مقطع تحصیلی"
              value={edu.degree}
              onChange={(e) => onChange(index, 'degree', e.target.value)}
            />
            <Input
              placeholder="نام دانشگاه"
              value={edu.school}
              onChange={(e) => onChange(index, 'school', e.target.value)}
            />
            <Input
              placeholder="رشته تحصیلی"
              value={edu.field}
              onChange={(e) => onChange(index, 'field', e.target.value)}
            />
            <div className="flex gap-2">
              <Input
                placeholder="تاریخ شروع"
                value={edu.startDate}
                onChange={(e) => onChange(index, 'startDate', e.target.value)}
              />
              <Input
                placeholder="تاریخ پایان"
                value={edu.endDate}
                onChange={(e) => onChange(index, 'endDate', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
    </FormSection>
  );
};