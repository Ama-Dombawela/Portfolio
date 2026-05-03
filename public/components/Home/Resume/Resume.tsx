import React from 'react';
import { experienceData } from '@/constant/constant';
import { FaDownload } from 'react-icons/fa';
import ExperienceCard from './ExperienceCard';

const Resume = () => {
  return (
    <div id="resume" className="pt-16 pb-16 relative z-10 w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">
        My <span className="text-emerald-400">Experience & Resume</span>
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-8 mb-12">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-justify text-emerald-300 text-lg font-medium leading-relaxed">
          I am actively seeking internship opportunities for Software Engineer and Full Stack Development roles where I can apply my full-stack development skills and contribute to innovative projects. With a strong foundation in the MERN technologies, Java, and modern web development, I am eager to grow as a developer and make a meaningful impact. Let's collaborate and build something extraordinary together.
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-3 px-8 py-4 bg-emerald-800 hover:bg-emerald-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium text-white hover:-translate-y-1 shadow-[0_0_15px_rgba(4,120,87,0.5)]">
          <FaDownload className="w-5 h-5"/>
          <span>Download Full Resume</span>
        </button>
      </div>
    </div>
  )
}

export default Resume;
