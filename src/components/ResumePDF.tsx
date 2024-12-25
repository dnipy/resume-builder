import React from 'react';
import { ResumeData } from '../types/resume';

interface ResumePDFProps {
  data: ResumeData;
}

export const ResumePDF = React.forwardRef<HTMLDivElement, ResumePDFProps>(
  ({ data }, ref) => {
    return (
      <div ref={ref} className="resume-page bg-white">
        <div className="space-y-6">
          <header className="text-center border-b pb-6">
            <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
            <p className="text-xl text-gray-600 mb-4">{data.personalInfo.jobTitle}</p>
            <div className="flex justify-center gap-4 text-sm text-gray-600">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
              <span>{data.personalInfo.location}</span>
            </div>
          </header>

          <section>
            <h2 className="text-xl font-bold mb-4">درباره من</h2>
            <p className="text-gray-700 leading-relaxed">{data.personalInfo.about}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">تحصیلات</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">سوابق شغلی</h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <h3 className="font-bold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">مهارت‌ها</h2>
            <div className="grid grid-cols-2 gap-4">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
);