import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from "../components/contact/ContactForm";
import TalentConsulting from '../components/talentConsulting/TalentConsulting';
import TalentConsultingSection from '../components/talentConsulting/TalentConsultingSection';



const TalentConsultingPage = () => {
  return (
    <>
           <Navbar /> 
           <TalentConsulting />
           <TalentConsultingSection />
            <ContactForm />
           <Footer />

    </>
  )
}

export default TalentConsultingPage
