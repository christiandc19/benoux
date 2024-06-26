import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SOLUTIONS from '../components/solutions/Solutions'
import SOLUTIONSSECTION from '../components/solutions/SolutionsSection'
import ContactForm from '../components/contact/ContactForm'
import SectionTwo from '../components/sectionTwo/SectionTwo'


const Team = () => {
  return (
    <>
    <Navbar /> 
    <SOLUTIONS />
    <SOLUTIONSSECTION />
    <SectionTwo />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Team