import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative left-0 w-full py-2 border-t border-white/10 bg-[#051208]/95 backdrop-blur-md z-50">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center relative'>
            <span className="text-emerald-800 font-extrabold text-lg leading-none"><span className='relative -top-1 inline-block'>A</span><span className='inline-block -translate-y-0.5'>D</span></span>
          </div>
          <h1 className="text-xl md:text-2xl text-white font-bold">AMA DOMBAWELA</h1>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/Ama-Dombawela" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/amadombawela/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:amadombawela@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-2 text-center border-t border-white/5 pt-2 w-11/12 md:w-4/5 mx-auto">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Ama Dombawela. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;
