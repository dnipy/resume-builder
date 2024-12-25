import React from 'react';
import { ResumeData } from '../types/resume';
import { PersonalInfoForm } from './form/PersonalInfoForm';
import { EducationForm } from './form/EducationForm';
import { ExperienceForm } from './form/ExperienceForm';
import { SkillsForm } from './form/SkillsForm';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ data, onChange }) => {
  const handlePersonalInfoChange = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    });
  };

  const handleEducationAdd = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: crypto.randomUUID(),
          degree: '',
          school: '',
          field: '',
          startDate: '',
          endDate: '',
        },
      ],
    });
  };

  const handleEducationDelete = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const newEducation = [...data.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    onChange({ ...data, education: newEducation });
  };

  const handleExperienceAdd = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: crypto.randomUUID(),
          position: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const handleExperienceDelete = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const newExperience = [...data.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    onChange({ ...data, experience: newExperience });
  };

  const handleSkillAdd = () => {
    onChange({
      ...data,
      skills: [
        ...data.skills,
        {
          id: crypto.randomUUID(),
          name: '',
          level: 3,
        },
      ],
    });
  };

  const handleSkillDelete = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter((skill) => skill.id !== id),
    });
  };

  const handleSkillChange = (index: number, field: string, value: string | number) => {
    const newSkills = [...data.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    onChange({ ...data, skills: newSkills });
  };

  return (
    <div className="space-y-6">
      <PersonalInfoForm
        data={data.personalInfo}
        onChange={handlePersonalInfoChange}
      />
      <EducationForm
        data={data.education}
        onAdd={handleEducationAdd}
        onDelete={handleEducationDelete}
        onChange={handleEducationChange}
      />
      <ExperienceForm
        data={data.experience}
        onAdd={handleExperienceAdd}
        onDelete={handleExperienceDelete}
        onChange={handleExperienceChange}
      />
      <SkillsForm
        data={data.skills}
        onAdd={handleSkillAdd}
        onDelete={handleSkillDelete}
        onChange={handleSkillChange}
      />
    </div>
  );
};