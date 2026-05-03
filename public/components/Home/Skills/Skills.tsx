import React from 'react';
import { skillsData } from '@/constant/constant';

type SkillProps = {
  skill: {
    id: number;
    name: string;
    percent: number;
  };
};

const SkillCard = ({ skill }: SkillProps) => {
  const circleStyle: React.CSSProperties = {
    background: `conic-gradient(#10b981 ${skill.percent * 3.6}deg, rgba(255,255,255,0.06) 0deg)`,
  };

  return (
    <div className="mb-4 w-full md:w-sm lg:w-md">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center justify-between gap-3 hover:-translate-y-1 hover:bg-white/10 hover:border-emerald-500/20 transform transition-all duration-300">
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <span className="font-semibold text-white leading-snug wrap-break-word">{skill.name}</span>
          </div>
        </div>

        <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center" aria-hidden>
          <div className="relative w-9 h-9 rounded-full" style={circleStyle}>
            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold bg-[#0b1220]/60 rounded-full">
              {skill.percent}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = skillsData.find((group) => group.category === 'Programming Languages');
  const frontend = skillsData.find((group) => group.category === 'Frontend');
  const backend = skillsData.find((group) => group.category === 'Backend');
  const remainingGroups = skillsData.filter(
    (group) => !['Programming Languages', 'Frontend', 'Backend'].includes(group.category)
  );

  return (
    <div id="skills" className="pt-16 pb-16 relative z-10 w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">
        My <span className="text-emerald-400">Skills</span>
      </h1>
      
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {programmingLanguages && (
          <div className="bg-[#050b14]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4 bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              {programmingLanguages.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {programmingLanguages.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {(frontend || backend) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {frontend && (
              <div className="bg-[#050b14]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4 bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                  {frontend.category}
                </h3>
                <div className="grid grid-cols-1 gap-y-3">
                  {frontend.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )}

            {backend && (
              <div className="bg-[#050b14]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4 bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                  {backend.category}
                </h3>
                <div className="grid grid-cols-1 gap-y-3">
                  {backend.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {remainingGroups.map((categoryGroup) => (
          <div key={categoryGroup.category} className="bg-[#050b14]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4 bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              {categoryGroup.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {categoryGroup.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
