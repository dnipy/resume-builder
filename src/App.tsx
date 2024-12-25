import React, { useRef, useState } from 'react';
import { ResumeForm } from './components/ResumeForm';
import { ResumePDF } from './components/ResumePDF';
import { ResumeData } from './types/resume';
import { useReactToPrint } from 'react-to-print';
import { Download, FileText, Eye } from 'lucide-react';

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    about: '',
  },
  education: [],
  experience: [],
  skills: [],
};

function App() {
  const [data, setData] = useState<ResumeData>(initialData);
  const [showPreview, setShowPreview] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-500 ml-2" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">رزومه‌ساز فارسی</h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="lg:hidden flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200"
              >
                <Eye size={20} />
                <span className="hidden sm:inline">
                  {showPreview ? 'ویرایش' : 'پیش‌نمایش'}
                </span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
              >
                <Download size={20} />
                <span className="hidden sm:inline">دانلود PDF</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`space-y-6 ${showPreview ? 'hidden lg:block' : ''}`}>
            <ResumeForm data={data} onChange={setData} />
          </div>
          <div className={`${!showPreview ? 'hidden lg:block' : ''}`}>
            <div className="lg:sticky lg:top-24">
              <ResumePDF ref={resumeRef} data={data} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;