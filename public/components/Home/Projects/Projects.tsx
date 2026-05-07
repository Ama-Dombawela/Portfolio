import React from 'react';
import { projectsData } from '@/constant/constant';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-16 relative z-10 w-11/12 md:w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
        My <span className="text-emerald-400">Projects</span>
      </h1>
      <h2 className="text-center text-gray-300 font-semibold tracking-widest uppercase text-sm mb-8 max-w-5xl mx-auto">Where ideas turn into reality — showcasing my passion for building meaningful, real-world applications</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;
