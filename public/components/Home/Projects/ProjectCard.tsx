import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

type ProjectProps = {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    githubUrl?: string;
  };
};

const ProjectCard = ({ project }: ProjectProps) => {
  const normalizedImageSrc =
    typeof project.image === 'string' ? project.image.trim() : '';

  const hasValidImageSrc =
    normalizedImageSrc.startsWith('/') ||
    normalizedImageSrc.startsWith('http://') ||
    normalizedImageSrc.startsWith('https://') ||
    normalizedImageSrc.startsWith('data:');

  return (
    <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 relative h-full">
      <div className="relative h-64 w-full bg-emerald-900/20">
        <div className="absolute inset-0 flex items-center justify-center text-emerald-400 text-6xl">
          {hasValidImageSrc ? (
            <Image
              src={normalizedImageSrc}
              alt={project.title || 'Project image'}
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-emerald-900/10 text-base font-medium text-emerald-300/80">
              Project Preview
            </div>
          )}
        </div>
      </div>
      <div className="p-6 relative flex flex-col h-[calc(100%-16rem)]">
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h2>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed text-justify flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pr-8 mt-auto">
          {project.tech.map((techItem, index) => (
            <span 
              key={index} 
              className="text-xs font-bold px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-md border border-emerald-500/40 shadow-sm"
            >
              {techItem}
            </span>
          ))}
        </div>
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaArrowRight className="text-emerald-400 w-5 h-5 -rotate-45" />
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
