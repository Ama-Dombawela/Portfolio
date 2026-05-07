import React from 'react';

type ExperienceProps = {
  exp: {
    id: number;
    role: string;
    company: string;
    year: string;
    description: string | string[];
  };
};

const ExperienceCard = ({ exp }: ExperienceProps) => {
  const isArray = Array.isArray(exp.description);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 relative transition-all duration-300">
      <div className="flex-1 w-full">
        <h2 className="text-2xl font-bold text-white mb-2">{exp.role}</h2>
        <p className="text-emerald-300 text-lg font-medium mb-3">{exp.company}</p>
        {isArray ? (
          <ul className="space-y-2 ml-6">
            {(exp.description as string[]).map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-md text-white/70">
                <span className="mt-1.5 shrink-0 text-emerald-400">•</span>
                <span className="text-justify">{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm ml-6 text-justify">{exp.description as string}</p>
        )}
      </div>
      <div className="absolute top-6 right-6 bg-emerald-900/50 px-4 py-2 rounded-lg border border-emerald-500/30 whitespace-nowrap transition-all duration-300 hover:scale-105">
        <span className="text-emerald-300 font-bold text-sm">{exp.year}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;