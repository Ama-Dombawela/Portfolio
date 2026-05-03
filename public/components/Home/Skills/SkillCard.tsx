import React from 'react';

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
    <div className="mb-4 w-full md:w-72">
      <div className="bg-[#050b14]/60 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transform transition-transform duration-300">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-400 via-emerald-500 to-emerald-700 flex items-center justify-center text-[#08111f] font-bold text-lg shadow-[0_0_18px_rgba(16,185,129,0.35)]">
          {skill.name.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-semibold bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">{skill.name}</span>
          </div>
        </div>

        <div className="w-12 h-12 rounded-full flex items-center justify-center" aria-hidden>
          <div className="relative w-10 h-10 rounded-full" style={circleStyle}>
            <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold bg-[#0b1220]/60 rounded-full">
              {skill.percent}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;