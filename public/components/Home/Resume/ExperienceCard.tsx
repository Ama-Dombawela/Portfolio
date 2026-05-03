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
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-start md:justify-between hover:bg-white/10 transition-all duration-300 hover:border-emerald-400/20 hover:shadow-lg">
      <div className="mb-4 md:mb-0 md:mr-6 flex-1">
        <h2 className="text-2xl font-bold text-white mb-2">{exp.role}</h2>
        <p className="text-emerald-300 text-lg font-medium mb-3">{exp.company}</p>
        
        {isArray ? (
          <ul className="space-y-2">
            {(exp.description as string[]).map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="mt-1.5 shrink-0 text-emerald-400">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm">{exp.description}</p>
        )}
      </div>
      <div className="shrink-0 self-start bg-emerald-900/50 px-4 py-2 rounded-lg border border-emerald-500/30 whitespace-nowrap transition-all duration-300 hover:scale-105">
        <span className="text-emerald-300 font-bold text-sm">{exp.year}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
