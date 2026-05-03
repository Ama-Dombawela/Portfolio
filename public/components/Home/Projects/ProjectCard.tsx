import React from 'react';
import Image from 'next/image';

type ProjectProps = {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
  };
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-48 w-full bg-emerald-900/20">
        <div className="absolute inset-0 flex items-center justify-center text-emerald-400 text-6xl opacity-50">
          <Image 
             src={project.image} 
             alt={project.title} 
             fill 
             style={{ objectFit: 'cover' }} 
             className="opacity-70"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((techItem, index) => (
            <span 
              key={index} 
              className="text-xs font-semibold px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full border border-emerald-500/30"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
