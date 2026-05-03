import React from 'react';
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pt-16 pb-8 border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10 mt-10">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl md:text-2xl text-white font-bold">AMA DOMBAWELA</h1>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-white/5 pt-6 w-4/5 mx-auto">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ama Dombawela. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;
