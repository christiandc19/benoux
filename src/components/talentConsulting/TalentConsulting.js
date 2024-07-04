import React from "react";
import Fade from 'react-reveal/Fade';
import './TalentConsulting.css'
import { Helmet } from 'react-helmet';


const TalentConsulting = () => {

    return (
      <>

            <Helmet>
                  <title>Benoux Agency - Talent Consulting</title>
                  <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
                  <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://benouxagency.com/talent-consulting" />
            </Helmet>


      <div className='talentConsulting'>
            <div className="talentConsultingContent">
            <Fade top>
                    <h1>TALENT CONSULTING</h1>
            </Fade>
            <Fade right>
                  <p>Talent Consulting for Healthcare Staffing is a specialized service aimed at optimizing the recruitment, retention, and management of healthcare professionals.</p>
            </Fade>
            </div>
     </div>

      </>
    )
}

export default TalentConsulting