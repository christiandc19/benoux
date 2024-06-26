import React from 'react'
import './Rpo_benefits.css'
import Fade from 'react-reveal/Fade';

import { BsCheckLg } from 'react-icons/bs';
import WhoWeAre from '../../assets/female_nurse.webp'


const Rpo_benefits = () => {
  return (
<>

<div className='rpoBenefits '>
        <div className='rpoBenefitsContent container'>

        <Fade left>
            <div className='rpoBenefitsLeft'>
                
                <div className='rpoBenefitsLeftHeader'>
                    <h1>Benefits of RPO</h1>
                    <p>By outsourcing their recruitment process, the healthcare company can ensure it meets its staffing needs effectively without diverting resources from its primary mission of patient care.</p> </div>
                
                <br /> <br />
                             
                <div className='rpoBenefitsChecklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p><b>Focus on Core Business: </b> By outsourcing recruitment, organizations can focus on their core business functions while the RPO provider handles talent acquisition.</p>
                    </div>
                </div>    

                <div className='rpoBenefitsChecklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                    <p><b>Access to Talent: </b> RPO providers often have access to a wider talent pool and can leverage their networks to find the best candidates.</p>                    
                    </div>
                </div> 

                <div className='rpoBenefitsChecklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                    <p><b>Improved Hiring Metrics: </b> Professional management of the recruitment process can lead to improvements in time-to-hire, cost-per-hire, and quality-of-hire metrics.</p>                     
                    </div>
                </div>  

                <div className='rpoBenefitsChecklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                    <p><b>Compliance and Risk Management:</b> RPO providers ensure that recruitment processes comply with relevant employment laws and regulations, reducing legal risks for the client.
                    </p>                      
                    </div>
                </div>

                
            </div>
        </Fade>

        <Fade right>
            <div className='rpoBenefitsRight'>
                    <img src={WhoWeAre} loading="lazy" alt='psychologist'/>
            </div>
        </Fade>

        </div>

      </div>


</>
  )
}

export default Rpo_benefits