import React from 'react';
import { ResumeData } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Input } from '../ui/Input';
import { AddButton } from '../ui/AddButton';
import { DeleteButton } from '../ui/DeleteButton';

interface SkillsFormProps {
  data: ResumeData['skills'];
  onAdd: () => void;
  onDelete: (id: string) => void;
  onChange: (index: number, field: string, value: string | number) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({
  data,
  onAdd,
  onDelete,
  onChange,
}) => {
  return (
    <FormSection
      title="مهارت‌ها"
      action={<AddButton onClick={onAdd} />}
    >
      {data.map((skill, index) => (
        <div key={skill.id} className="relative flex items-center gap-4 mb-4 last:mb-0">
          <DeleteButton
            onClick={() => onDelete(skill.id)}
            className="absolute left-0 top-1/2 -translate-y-1/2"
          />
          <Input
            placeholder="نام مهارت"
            value={skill.name}
            onChange={(e) => onChange(index, 'name', e.target.value)}
            className="flex-1"
          />
          <div className="w-32 flex-shrink-0">
            <input
              type="range"
              min="1"
              max="5"
              value={skill.level}
              onChange={(e) => onChange(index, 'level', parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </FormSection>
  );
};