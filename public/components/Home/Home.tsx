import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import Resume from './Resume/Resume'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden pb-40'>
      <Hero/>
      <hr className="w-11/12 md:w-4/5 mx-auto border-white/10 my-4" />
      <Services/>
      <hr className="w-11/12 md:w-4/5 mx-auto border-white/10 my-4" />
      <Projects/>
      <hr className="w-11/12 md:w-4/5 mx-auto border-white/10 my-4" />
      <Skills/>
      <hr className="w-11/12 md:w-4/5 mx-auto border-white/10 my-4" />
      <Education/>
      <hr className="w-11/12 md:w-4/5 mx-auto border-white/10 my-4" />
      <Resume/>
      <hr className="w-11/12 md:w-4/5 mx-auto border-white/10 my-4" />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home