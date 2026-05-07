"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { NavLinks } from '@/constant/constant'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'

type NavProps = {
  openNav: () => void
};

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`transition-all ${navBg ? "bg-[#071a0fd9] shadow-md " : ""} duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col relative'>
            <span className="text-emerald-800 font-extrabold text-lg leading-none"><span className='relative -top-1 inline-block'>A</span><span className='inline-block -translate-y-0.5'>D</span></span>
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>AMA DOMBAWELA</h1>
        </div>

        {/* NAV LINKS */}
        <div className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className='text-base hover:text-emerald-300 text-white font-medium transition-all duration-200'
              >
                <p>{link.Label}</p>
              </Link>
            )
          })}
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>

          {/* CV button */}
          <a
            href="/Ama_Dombawela_Resume.pdf"
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-emerald-600 hover:bg-emerald-800 transition-all duration-200 text-white flex items-center space-x-2"
          >
            <BiDownload className='w-5 h-5' />
            <span>Download CV</span>
          </a>

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 text-white lg:hidden cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default Nav;