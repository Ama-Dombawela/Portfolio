"use client";
import React from 'react'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './Background';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
            <ParticlesHero/>
            <div className="relative z-10 flex flex-col items-center">
                <Image
                    src="/images/assets/Me.jpeg"
                    alt="Hero Image"
                    width={300}
                    height={300}
                    className="rounded-full border-10 border-[#0c0c48aa]"
                />
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                    Computer Science Undergraduate,<br/>
                    <span className = "text-cyan-400"> Curious mind. Creative heart. Developer in progress</span>
                </h1>
                <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                    Hi ! I&apos;m Ama Dombawela - A Passionate 
                    <span className='text-cyan-300 font-bold'>
                    <TypeWriter
                        options={{
                            strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Developer', 'Technology Enthusiast'],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2',

                        }}
                    />
                    </span>
                </h2>
                <button className = 'mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
                    <span>See my work</span>
                    <BsArrowRight className='ml-2 w-5 h-5 inline-block text-bold'/>
                </button>
            </div>

        </div>
    );
};

export default Hero