import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Expertise from '../components/expertise/Expertise'
import ContactForm from '../components/contact/ContactForm';
import ExpertiseSection from '../components/expertise/ExpertiseSection'

import Footer from '../components/footer/Footer'

const ExpertisePage = () => {
    return (
        <>
           <Navbar /> 
           <Expertise />
           <ExpertiseSection />
           <ContactForm />
           <Footer />
        </>
    )
}

export default ExpertisePage
