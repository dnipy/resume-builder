export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    about: string;
  };
  education: {
    id: string;
    degree: string;
    school: string;
    field: string;
    startDate: string;
    endDate: string;
  }[];
  experience: {
    id: string;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: {
    id: string;
    name: string;
    level: number;
  }[];
}