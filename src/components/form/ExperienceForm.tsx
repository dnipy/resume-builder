import React from 'react';
import { ResumeData } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { AddButton } from '../ui/AddButton';
import { DeleteButton } from '../ui/DeleteButton';

interface ExperienceFormProps {
  data: ResumeData['experience'];
  onAdd: () => void;
  onDelete: (id: string) => void;
  onChange: (index: number, field: string, value: string) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
  data,
  onAdd,
  onDelete,
  onChange,
}) => {
  return (
    <FormSection
      title="سوابق شغلی"
      action={<AddButton onClick={onAdd} />}
    >
      {data.map((exp, index) => (
        <div key={exp.id} className="relative border-b last:border-0 pb-4 mb-4 last:mb-0">
          <DeleteButton
            onClick={() => onDelete(exp.id)}
            className="absolute left-0 top-0"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="عنوان شغلی"
              value={exp.position}
              onChange={(e) => onChange(index, 'position', e.target.value)}
            />
            <Input
              placeholder="نام شرکت"
              value={exp.company}
              onChange={(e) => onChange(index, 'company', e.target.value)}
            />
            <Input
              placeholder="موقعیت مکانی"
              value={exp.location}
              onChange={(e) => onChange(index, 'location', e.target.value)}
            />
            <div className="flex gap-2">
              <Input
                placeholder="تاریخ شروع"
                value={exp.startDate}
                onChange={(e) => onChange(index, 'startDate', e.target.value)}
              />
              <Input
                placeholder="تاریخ پایان"
                value={exp.endDate}
                onChange={(e) => onChange(index, 'endDate', e.target.value)}
              />
            </div>
            <TextArea
              placeholder="شرح وظایف"
              value={exp.description}
              onChange={(e) => onChange(index, 'description', e.target.value)}
              className="sm:col-span-2"
            />
          </div>
        </div>
      ))}
    </FormSection>
  );
};