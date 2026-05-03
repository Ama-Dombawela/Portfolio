import React from 'react';

type EducationProps = {
  edu: {
    id: number;
    degree: string;
    institution: string;
    year: string;
    description: string | string[];
  };
};

const EducationCard = ({ edu }: EducationProps) => {
  const isArray = Array.isArray(edu.description);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#050b14]/60 p-6 shadow-lg backdrop-blur-md transform transition-all duration-300 hover:-translate-y-1 hover:bg-[#081520] hover:border-emerald-500/15 hover:shadow-xl">
      <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-emerald-400 via-emerald-500 to-transparent transition-all duration-300 group-hover:w-1.5 group-hover:from-emerald-300 group-hover:via-emerald-400" />
      <div className="absolute right-4 top-4 h-5 w-5 rounded-full border border-emerald-400/25 bg-emerald-400/8 opacity-90 transition-all duration-200 group-hover:scale-105 group-hover:bg-emerald-400/20" aria-hidden />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="flex-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300">
          <span className="text-sm font-bold text-emerald-300">{edu.year}</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">{edu.degree}</h2>
          <p className="mb-3 text-lg font-medium text-emerald-400">{edu.institution}</p>

          {isArray ? (
            <ul className="space-y-2">
              {(edu.description as string[]).map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-1.5 shrink-0 text-emerald-400">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-300">{edu.description}</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default EducationCard;
