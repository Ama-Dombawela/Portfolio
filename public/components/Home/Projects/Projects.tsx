import React from 'react';
import { projectsData } from '@/constant/constant';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-16 relative z-10 w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">
        My <span className="text-emerald-400">Projects</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;
