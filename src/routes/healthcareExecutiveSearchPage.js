import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HealthcareExecutive from '../components/healthcare-executive-search/Healthcare_executive_search'
import HealthcareExecutiveSearchSection from '../components/healthcare-executive-search/Healthcare_executive_search_section'
import HealthcareExecutiveSearchSection2 from '../components/healthcare-executive-search/Healthcare_executive_search_section2'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import ContactForm from '../components/contact/ContactForm'

const healthcareExecutiveSearchPage = () => {
    return (
        <>
           <Navbar /> 
           <HealthcareExecutive />
           <HealthcareExecutiveSearchSection />
           <SectionTwo />
           <HealthcareExecutiveSearchSection2 />
           <ContactForm />
           <Footer />
        </>
    )
}

export default healthcareExecutiveSearchPage
