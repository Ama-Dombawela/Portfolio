'use client';
import React from 'react';
import { FaCertificate, FaUsers, FaTrophy } from 'react-icons/fa';

export type CertificateType = 'certification' | 'membership' | 'participation';

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  type: CertificateType;
  credentialId?: string;
};

type CertificationCardProps = {
  cert: Certification;
};


const iconBgMap: Record<CertificateType, string> = {
  certification: 'bg-emerald-900/50 border-emerald-500/30',
  membership:    'bg-blue-900/50 border-blue-500/30',
  participation: 'bg-purple-900/50 border-purple-500/30',
};

const iconMap: Record<CertificateType, React.ReactNode> = {
  certification: <FaCertificate className="text-emerald-400 w-5 h-5" />,
  membership:    <FaUsers className="text-blue-400 w-5 h-5" />,
  participation: <FaTrophy className="text-purple-400 w-5 h-5" />,
};



const CertificationCard = ({ cert }: CertificationCardProps) => {

  return (
    <>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex items-start gap-3 transition-all duration-300 hover:bg-white/15">
        <div className={`shrink-0 mt-0.5 p-2.5 rounded-xl border ${iconBgMap[cert.type]}`}>
          {iconMap[cert.type]}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap mb-0.5">
            <h3 className="text-white font-semibold text-base leading-snug">{cert.title}</h3>
          </div>

          <p className="text-white/60 text-sm font-medium mb-2">{cert.issuer}</p>

          {cert.credentialId && (
            <p className="text-white/40 text-xs mb-1.5">
              Credential ID: <span className="text-white/60 font-mono">{cert.credentialId}</span>
            </p>
          )}

          <div className="flex items-center justify-between gap-2 flex-wrap w-full mt-1">
            <div>
              {cert.type !== 'certification' && cert.year && (
                <span className="bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10 text-white/50 font-bold text-xs">
                  {cert.year}
                </span>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificationCard;