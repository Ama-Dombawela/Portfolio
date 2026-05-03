"use client";
import React from 'react'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect'
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white pt-[12vh] pb-[5vh]">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 mt-4 sm:mt-8 w-11/12 md:w-4/5 mx-auto animate-fade-in-up">

                {/* Photo on left side */}
                <div className="w-full sm:w-9/12 md:w-6/12 lg:w-[40%] max-w-lg mx-auto md:mx-0">
                    <Image
                        src="/images/assets/ME.jpeg"
                        alt="Hero Image"
                        width={500}
                        height={700}
                        className="rounded-[2.5rem] object-cover w-full aspect-[4/5] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                    />
                </div>

                {/* Description on right side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2 flex-1">

                    {/* Greeting */}
                    <h2 className="text-emerald-400 text-lg md:text-xl font-semibold mb-3 tracking-wider uppercase">
                        Hi! I&apos;m Ama Dombawela
                    </h2>

                    {/* Main Title */}
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white leading-[1.1]'>
                        Computer Science <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">
                            Undergraduate
                        </span>
                    </h1>

                    {/* Tagline / Typewriter */}
                    <div className="text-xl md:text-2xl font-medium text-gray-200 mb-8 flex flex-col sm:flex-row items-center md:items-start gap-2">
                        <span>A Passionate</span>
                        <span className='text-emerald-400 font-bold'>
                            <TypeWriter
                                options={{
                                    strings: ['Software Engineer.', 'Frontend Developer.', 'Backend Developer.', 'Full Stack Developer.', 'Web Developer.', 'Tech Enthusiast.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                        I am currently seeking opportunities to apply my knowledge and grow as a software engineer. With a passion for full-stack development and creative problem solving, I enjoy building efficient, user-friendly applications and continuously expanding my skills in modern technologies. <br /><br />
                        <span className="italic text-emerald-200">Curious mind. Creative heart. Developer in progress.</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Hero