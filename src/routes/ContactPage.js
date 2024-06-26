import React from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import ContactForm from "../components/contact/ContactForm";
import Navbar from '../components/navbar/Navbar'

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Contact />
            <ContactForm />
            <Footer />   
        </>
    )
}

export default ContactPage
