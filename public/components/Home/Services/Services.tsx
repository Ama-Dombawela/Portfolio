import React from 'react';
import { servicesData } from '@/constant/constant';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div id="services" className="pt-32 pb-20 relative z-10 w-11/12 md:w-4/5 mx-auto border-t border-white/5">
        <div className="text-center mb-16">
            <h2 className="text-gray-300 font-semibold tracking-widest uppercase text-sm mb-2">My <span className="text-emerald-400">Services</span></h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
                What <span className="text-emerald-400">I Do</span>
            </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
    </div>
  )
}

export default Services;