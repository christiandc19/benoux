import React from 'react'
import Zoom from 'react-reveal/Zoom';

import './Solutions.css'
import { Helmet } from 'react-helmet';



const Solutions = () => {
    return (
        <>

    <Helmet>
        <title>Benoux Agency - Our Solutions</title>
        <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
        <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://benouxagency.com/healthcare-recruitment-solutions" />
      </Helmet>


        <div className='solutions'>
                <div className="solutionsContent">
                    <Zoom duration={2000}>
                        <h1>Streamline Your Healthcare Staffing with Expert Recruitment Solutions</h1>
                    </Zoom>
                </div>
            </div>

        </>
    )
}

export default Solutions