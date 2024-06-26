import React from 'react'
import './ExpertiseSection3.css'
import maleNurse from "../../assets/male_nurse.webp";
import { BsCheckLg } from 'react-icons/bs';

const Activities = () => {
  return (
    <>
      <div className='ExpertiseSection3'>

        <div className='ExpertiseSection3Content'>

            <div className='ExpertiseSection3Flex'>

                <div className='ExpertiseSection3FlexLeft'>
                <h2> Travel Healthcare Staffing</h2>  
                        <p>Finding the right fit for your permanent team can be a daunting task. Benoux Staffing Agency simplifies this process by connecting you with candidates who not only possess the required qualifications but also align with your organizational culture. We specialize in placing:
                        </p>
                        <ul>
                            <li><p><span><BsCheckLg /></span> Travel Nurses </p></li>
                            <li><p><span><BsCheckLg /></span> Travel Therapists </p></li>
                            <li><p><span><BsCheckLg /></span> Travel Technicians</p></li>
                        </ul>
            
                        <h2> Executive Search</h2>  
                        <p>Leadership is vital in healthcare. Our executive search services focus on finding top-tier candidates for key leadership positions within your organization. We recruit:</p>
                        <ul>
                            <li><p><span><BsCheckLg /></span> Chief Medical Officers (CMOs)</p></li>
                            <li><p><span><BsCheckLg /></span> Chief Nursing Officers (CNOs)</p></li>
                            <li><p><span><BsCheckLg /></span> Healthcare Executives</p></li>
                            <li><p><span><BsCheckLg /></span> Department Heads</p></li>
                        </ul>
            
                </div>

                <div className='ExpertiseSection3FlexRight'>
                <img src={maleNurse} alt="male nurse" />

                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default Activities
