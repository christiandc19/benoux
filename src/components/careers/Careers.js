import React from "react";
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';

import './Careers.css'

const Careers = () => {

    return (
            <>

            <Helmet>
                  <title>Benoux Agency - Careers</title>
                  <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
                  <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://benouxagency.com/careers" />
            </Helmet>

            <div className='careers'>
                        <div className="careers-content">
                            <Fade top>
                                <h1>Join Our Talent Network</h1>
                                <p>At Benoux Healthcare Staffing Agency, we are dedicated to connecting healthcare professionals with rewarding career opportunities.</p>
                            </Fade>
                        </div>
                    </div>
            </>
    )

    }
export default Careers




