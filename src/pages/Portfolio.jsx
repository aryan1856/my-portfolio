import React from 'react'
import TopComponent from '../components/TopComponent'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Socials from '../components/Socials'
import Footer from '../components/Footer'

export const Portfolio = () => {
  return (
    <>
      <TopComponent/>
      <Education/>
      <Skills/>
      <Projects/>
      <Socials/>
      <Footer/>
    </>
  )
}
