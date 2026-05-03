import React from 'react';
import { educationData } from '@/constant/constant';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div id="education" className="pt-16 pb-16 relative z-10 w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">
        My <span className="text-emerald-400">Education</span>
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </div>
  )
}

export default Education;
