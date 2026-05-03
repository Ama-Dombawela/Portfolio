import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaServer, FaCode } from 'react-icons/fa';

const iconMap: { [key: string]: React.JSX.Element } = {
  FaLaptopCode: <FaLaptopCode className="w-10 h-10 text-emerald-400" />,
  FaPaintBrush: <FaPaintBrush className="w-10 h-10 text-emerald-400" />,
  FaServer: <FaServer className="w-10 h-10 text-emerald-400" />,
  FaCode: <FaCode className="w-10 h-10 text-emerald-400" />
};

type ServiceProps = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <div className="bg-[#050b14]/80 backdrop-blur-md border border-white/5 shadow-lg rounded-3xl p-10 md:p-12 hover:-translate-y-4 hover:bg-white/5 hover:shadow-[0_15px_40px_rgba(4,120,87,0.3)] transition-all duration-700 cursor-pointer flex flex-col justify-start items-center text-center group">
      <div className="bg-emerald-900/40 border border-emerald-500/20 p-5 rounded-full mb-8 group-hover:bg-emerald-800/40 transition-colors duration-500">
         {iconMap[service.icon]}
      </div>
      <h2 className="text-2xl font-bold text-white mb-5 tracking-wide">{service.title}</h2>
      <p className="text-gray-300 text-base leading-relaxed font-light text-justify w-full">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
