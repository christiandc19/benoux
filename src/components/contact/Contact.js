import React from "react";
import Fade from 'react-reveal/Fade';
import './Contact.css'
import { Helmet } from 'react-helmet';


const Contact = () => {

    return (
      <>

            <Helmet>
                  <title>Benoux Agency - Careers</title>
                  <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
                  <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://benouxagency.com/contact" />
            </Helmet>


<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>CONTACT US</h1>
            </Fade>
            <Fade right>
                  <h2>Ready to enhance your healthcare team with top-tier professionals? Contact Benoux Staffing Agency today to learn more about our comprehensive healthcare staffing services.</h2>
                  <p><a href="tel:3232710351"> +1 (323) 271-0351</a></p>
            </Fade>
            </div>
     </div>

      </>
    )
}

export default Contact