import React from "react";
import "./sectionThree.css";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import male_doctor from "../../assets/male_doctor.png";

const WhatWeDo = () => {
  return (
    <>

      <div className="sectionThree ">
        <div className="sectionThreeContent">

          <div className="sectionThreeLeft">
          <Zoom duration={1500}>
          <img src={male_doctor} alt="male doctor" loading="lazy"/>
          </Zoom>


          </div>
        

          <div className="sectionThreeRight">
          <Zoom duration={1000}>
            <h1>What We Do</h1>
          </Zoom>

            <br />
          
          <Fade bottom>
            <p>
            The healthcare industry faces an acute staffing shortage of up to 3.2 million employees by 2026. As organizations grapple to fill positions, workers may feel stretched thin, and patient care could be compromised. Benoux Agency is poised to change that. Our strategic, data-driven recruitment solutions ensure highly skilled candidates are matched with leading healthcare facilities nationwide. As award-winning recruiting specialists, we take a technological, thoughtful, and proactive approach to deliver the best possible outcome to candidates, clients, and patients.            
            </p>
          </Fade>
        
            <br />

          <Fade bottom>
            <p>
            Our vision is a world where every healthcare organization is staffed with devoted and skilled individuals providing exceptional patient care.
            </p>
          </Fade>

          </div>
        </div>
      </div>

    </>
  );
};

export default WhatWeDo;
