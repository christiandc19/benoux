import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HealthcareRpo from '../components/healthcare-rpo/Healthcare_rpo'
import HealthcareRpoSection from '../components/healthcare-rpo/Healthcare_rpo_section'
import ContactForm from '../components/contact/ContactForm'
import RpoProcess from '../components/healthcare-rpo/Rpo_process'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import RpoBenefits from '../components/healthcare-rpo/Rpo_benefits'

const HealthcareRpoPage = () => {
    return (
        <>
           <Navbar /> 
           <HealthcareRpo />
           <HealthcareRpoSection />
           <RpoProcess />
           <RpoBenefits />
           <SectionTwo />
           <ContactForm />
           <Footer />
        </>
    )
}

export default HealthcareRpoPage
