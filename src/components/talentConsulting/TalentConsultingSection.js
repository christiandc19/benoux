import React from 'react'
import './TalentConsultingSection.css'
import Zoom from 'react-reveal/Zoom';

import { BsCheckLg } from 'react-icons/bs';
import WhoWeAre from '../../assets/male_nurse.webp'


const TalentConsultingSection = () => {
  return (
<>

<div className='TalentConsultingSection '>
        <div className='TalentConsultingSectionContent container'>

            <div className='TalentConsultingSectionLeft'>

            <h1>Why Choose Benoux Agency for Talent Consulting?</h1>
                <p>In the ever-evolving healthcare industry, finding the right talent is crucial for delivering exceptional patient care and maintaining operational excellence. At Benoux Staffing Agency, we understand the unique challenges and demands of healthcare staffing. Our Talent Consulting services are designed to help healthcare organizations build a workforce that is skilled, reliable, and aligned with their strategic goals.</p> <br /> <br />
                             
                <div className='checklist'>
                    <div className='TalentConsultingSectionIcon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Industry Expertise: Our consultants possess deep knowledge of the healthcare sector, understanding the specific needs and regulations that impact your staffing decisions.</p>
                    </div>
                </div>    

                <div className='checklist'>
                    <div className='TalentConsultingSectionIcon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Customized Solutions: We tailor our consulting services to meet the unique requirements of your organization, ensuring that we provide solutions that fit your specific needs.</p>
                    </div>
                </div> 

                <div className='checklist'>
                    <div className='TalentConsultingSectionIcon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Proven Track Record: With a history of successful placements and satisfied clients, we have a proven track record of delivering high-quality talent consulting services.</p>
                    </div>
                </div>  

            </div>



        <Zoom duration={2000}>
            <div className='TalentConsultingSectionRight'>
                    <img src={WhoWeAre} loading="lazy" alt='psychologist'/>
            </div>
        </Zoom>

        </div>

      </div>


</>
  )
}

export default TalentConsultingSection