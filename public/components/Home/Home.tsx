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
    <div className='overflow-hidden'>
      <Hero/>
      <Services/>
      <Projects/>
      <Skills/>
      <Education/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home