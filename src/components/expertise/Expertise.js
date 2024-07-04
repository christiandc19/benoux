import React from 'react'
import Fade from 'react-reveal/Fade';
import './Expertise.css'
import { Helmet } from 'react-helmet';


const Expertise = () => {
    return (
        <>
            <Helmet>
                  <title>Benoux Agency - Expertise</title>
                  <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
                  <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://benouxagency.com/expertise" />
            </Helmet>

        <div className='expertise'>

            <div className="expertiseContent">
                <Fade right>
                    <h1>Experienced Healthcare Industry Recruiters</h1>
                </Fade>
            </div>
        </div>

        </>
    )
}

export default Expertise
