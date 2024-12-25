import React from 'react';
import { ResumeData } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

interface PersonalInfoFormProps {
  data: ResumeData['personalInfo'];
  onChange: (field: string, value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
  return (
    <FormSection title="اطلاعات شخصی">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="نام و نام خانوادگی"
          value={data.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
        />
        <Input
          placeholder="عنوان شغلی"
          value={data.jobTitle}
          onChange={(e) => onChange('jobTitle', e.target.value)}
        />
        <Input
          type="email"
          placeholder="ایمیل"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <Input
          type="tel"
          placeholder="شماره تماس"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
        <Input
          placeholder="موقعیت مکانی"
          value={data.location}
          onChange={(e) => onChange('location', e.target.value)}
          className="sm:col-span-2"
        />
      </div>
      <TextArea
        placeholder="درباره من"
        value={data.about}
        onChange={(e) => onChange('about', e.target.value)}
        className="mt-4"
      />
    </FormSection>
  );
};