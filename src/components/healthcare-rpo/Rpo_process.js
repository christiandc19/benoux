import React from "react";
import "./Rpo_process.css";
import Planning from '../../assets/planning.webp'
import Implementation from '../../assets/implementation.webp'
import Recruitment from '../../assets/recruitment.webp'
import Hiring from '../../assets/hiring.webp'
import Onboarding from '../../assets/onboarding.webp'
import Zoom from 'react-reveal/Zoom';

const RpoProcess = () => {
  return (
    <>
      <div className="rpoProcess">
        <div className="rpoProcessHeader container">
          <h1>How Does RPO Work?</h1>
          <p>
          Recruitment Process Outsourcing (RPO) is a form of business process outsourcing where an organization transfers all or part of its recruitment processes to an external service provider. The RPO provider acts as an extension of the company’s HR department, providing a comprehensive range of recruitment services to help meet the company’s hiring needs. Here’s how RPO typically works:          
          </p>
        </div>

        <div className="rpoProcessCards container">
          <div className="rpoProcessCardsContents">

          <div className="rpoProcessCard">
                  <Zoom duration={1000}>
                  <img src={Planning} alt="Planning at the office" loading="lazy"/>
                  </Zoom>
                  <h1>Assessment and Planning</h1>
                  <p>
                  We at Benoux Staffing conducts a thorough analysis of the client’s current recruitment processes, hiring needs, and challenges.
                  </p>
            </div>


            <div className="rpoProcessCard">
                  <Zoom duration={1000}>
                  <img src={Implementation} alt="Integrity" loading="lazy"/>
                  </Zoom>
                  <h1>Implementation</h1>
                  <p>
                  Benoux Staffing integrates with the client’s existing HR systems and processes. We establish communication channels and reporting structures to ensure seamless collaboration.
                  </p>
            </div>


            <div className="rpoProcessCard">
                  <Zoom duration={1000}>
                  <img src={Recruitment} alt="Integrity" loading="lazy"/>
                  </Zoom>
                  <h1>Sourcing and Recruitment</h1>
                  <p>
                  Benoux Staffing uses various channels to source candidates, such as job boards, social media, industry networks, and their own talent databases.
                  </p>
            </div>

            <div className="rpoProcessCard">
                  <Zoom duration={1000}>
                  <img src={Hiring} alt="Integrity" loading="lazy"/>
                  </Zoom>
                  <h1>Selection and Hiring</h1>
                  <p>
                  We coordinate interviews between shortlisted candidates and the client’s hiring managers, handle all logistics, including scheduling and follow-ups.
                  </p>
            </div>

            <div className="rpoProcessCard">
                  <Zoom duration={1000}>
                  <img src={Onboarding} alt="Onboarding" loading="lazy"/>
                  </Zoom>
                  <h1>Onboarding</h1>
                  <p>
                 Benoux Staffing upports the onboarding process to ensure new hires are integrated smoothly into the client’s organization. We handle paperwork, orientation scheduling, and initial training as needed.
                  </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default RpoProcess;
