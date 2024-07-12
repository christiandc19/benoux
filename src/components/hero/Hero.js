import React from "react";
// import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import "./Hero.css";
import Hero1 from '../../assets/hero1.webp'
import Hero2 from '../../assets/hero2.webp'
import Hero3 from '../../assets/hero3.webp'
import Hero4 from '../../assets/hero4.webp'

import { Helmet } from 'react-helmet';



const Hero = () => {
  return (
    <>

      <Helmet>
        <title>Benoux Agency - Home</title>
        <meta name="description" content="Benoux Staffing Agency provides top-tier staffing solutions in the healthcare industry, including dental, nursing, and biotechnology sectors." />
        <meta name="keywords" content="staffing agency, healthcare staffing, dental staffing, nursing staffing, biotechnology staffing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.benouxagency.com/" />
      </Helmet>

    <div className="hero-content">
      <div className="hero">

          <div class="fling-minislide">
            <img src={Hero4} alt="Slide 1" />
            <img src={Hero3} alt="Slide 2" />
            <img src={Hero1} alt="Slide 3" />
            <img src={Hero2} alt="Slide 4" />
          </div>
          



          <div className="content">
            <div className='content-caption'>
            <Zoom duration={1000}>
            <h1>Your Partner in Quality Healthcare Staffing</h1>
            </Zoom>
            <Zoom duration={2000}>
            <h2>Quality. Trust. Expertise</h2>
            </Zoom>
            {/* <Zoom duration={3000}>
            <p><a href="tel:3232710351"> +1 (323) 271-0351</a></p>
            </Zoom> */}
            </div>
          </div>



{/* 
          <div className="hero-container">
            <div className="content">
              <Zoom duration={3000}>
                <h1>Your Partner in Quality Healthcare Staffing</h1>
                <h2>Quality. Trust. Expertise</h2>
                <p>Your Partner in Quality Healthcare Staffing</p>    
              </Zoom>
            </div>
          </div> */}



        </div>
      </div>
    </>
  );
};

export default Hero;
