"use client";
import React from 'react';
import { experienceData, certificationData } from '@/constant/constant';
import { FaLinkedinIn } from 'react-icons/fa';
import ExperienceCard from './ExperienceCard';
import CertificationCard from './CertificationCard';
import type { Certification } from './CertificationCard';
import { BiDownload } from 'react-icons/bi';

const Resume = () => {
  return (
    <div id="resume" className="pt-16 pb-16 relative z-10 w-11/12 md:w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
        My <span className="text-emerald-400">Experience & Resume</span>
      </h1>
      <h2 className="text-center text-gray-300 font-semibold tracking-widest uppercase text-sm mb-10 max-w-5xl mx-auto">A journey of learning, building, and turning ideas into meaningful digital experiences</h2>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        {/* Left — Experience */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-5">Experience</h2>
          <div className="space-y-6">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>

          <div className="mt-20 mb-8">
            <p className="text-justify text-white text-lg font-medium leading-relaxed">
              I am actively seeking internship opportunities for Software Engineer and Full Stack
              Development roles where I can apply my full-stack development skills and contribute
              to innovative projects. With a strong foundation in the MERN technologies, Java, and
              modern web development, I am eager to grow as a developer and make a meaningful
              impact. Let's collaborate and build something extraordinary together.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href="/Ama_Dombawela_Resume.pdf"
              download
              className="flex items-center gap-3 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-800 transition-all duration-200 cursor-pointer rounded-xl text-lg font-medium text-white hover:-translate-y-1 shadow-[0_0_15px_rgba(4,120,87,0.5)]"
            >
              <BiDownload className="w-5 h-5" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </div>

        {/* Right — Credentials */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-5">Licenses & Certifications</h2>
            <div className="space-y-4">
              {certificationData.map((cert: Certification) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}

              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/amadombawela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/30 px-3 py-2 text-sm font-medium text-emerald-300 transition-colors duration-300 hover:bg-emerald-900/50 hover:text-emerald-200"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                  <span>View certificates on LinkedIn</span>
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;