import React from 'react';
import { educationData } from '@/constant/constant';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div id="education" className="pt-16 pb-16 relative z-10 w-11/12 md:w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
        My <span className="text-emerald-400">Education</span>
      </h1>
      <h2 className="text-center text-gray-300 font-semibold tracking-widest uppercase text-sm mb-10 max-w-5xl mx-auto">A complete academic journey from school to university that built my foundation in computer science and software engineering</h2>


      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </div>
  )
}

export default Education;
