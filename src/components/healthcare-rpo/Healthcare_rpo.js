import React from 'react'
import Fade from 'react-reveal/Fade';
import './Healthcare_rpo.css'
import { Helmet } from 'react-helmet';

const Healthcare_rpo = () => {
    return (

<>
        <Helmet>
            <title>Benoux Agency - RPO</title>
            <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
            <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://benouxagency.com/healthcare-rpo" />
        </Helmet>

        <div className='HealthcareRpo'>
                <div className="HealthcareRpoContent">
                    <Fade top>
                    <h1>Recruitment Process Outsourcing (RPO)</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default Healthcare_rpo
