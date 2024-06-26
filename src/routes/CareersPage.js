import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Careers from '../components/careers/Careers'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm';
import CareersHome from '../components/careers/CareersHome';




const CareersPage = () => {
    return (
        <>
           <Navbar /> 
           <Careers />
           <CareersHome />
           <ContactForm />
           <Footer />
        </>
    )
}

export default CareersPage
