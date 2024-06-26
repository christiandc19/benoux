import React from 'react'
import './ExpertiseSection4.css'
import femaleNurse from "../../assets/female_nurse_2.webp";
import { BsCheckLg } from 'react-icons/bs';

const ExpertiseSection2 = () => {
  return (
    <>
      
        <div className='expertiseSection2'>
            <div className='expertiseSection2Content'>
                <div className='expertiseSection2Flex'>
                    <div className='expertiseSection2FlexLeft'>
                        <img src={femaleNurse} alt="activities" />
                    </div>

                    <div className='expertiseSection2FlexRight'>
                        <h1>We Specialize in Comprehensive Healthcare Services</h1>
                        <p>At Benoux Staffing Agency, we understand that quality healthcare is the cornerstone of a thriving community. Our mission is to provide exceptional staffing solutions tailored to meet the unique needs of healthcare providers. Whether you're a hospital, clinic, long-term care facility, or any other healthcare institution, we are committed to delivering highly skilled professionals who excel in patient care and medical expertise.</p>
                        <h2>Temporary Staffing Solutions</h2>
                        <p>Our temporary staffing services are designed to help healthcare facilities manage short-term staff shortages due to vacations, leaves of absence, or sudden increases in patient volume. We provide:</p><br/>
                        <ul>
                            <li><p><span><BsCheckLg /></span> Registered Nurses (RNs)</p></li>
                            <li><p><span><BsCheckLg /></span> Licensed Practical Nurses (LPNs)</p></li>
                            <li><p><span><BsCheckLg /></span> Certified Nursing Assistants (CNAs)</p></li>
                            <li><p><span><BsCheckLg /></span> Medical Technicians</p></li>
                            <li><p><span><BsCheckLg /></span> Administrative Support Staff</p></li>
                        </ul>

                        <h2>Permanent Placement Services</h2>  
                        <p>Finding the right fit for your permanent team can be a daunting task. Benoux Staffing Agency simplifies this process by connecting you with candidates who not only possess the required qualifications but also align with your organizational culture. We specialize in placing:</p><br/>
                        <ul>
                            <li><p><span><BsCheckLg /></span>Physicians and Surgeons </p></li>
                            <li><p><span><BsCheckLg /></span> Nurse Practitioners (NPs)</p></li>
                            <li><p><span><BsCheckLg /></span> Physician Assistants (PAs)</p></li>
                            <li><p><span><BsCheckLg /></span> Healthcare Administrators</p></li>
                            <li><p><span><BsCheckLg /></span> Allied Health Professionals</p></li>
                        </ul>



                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ExpertiseSection2
