import React, { useState } from 'react';
import './Sidetabs.css';
import { BsDot } from "react-icons/bs";

import { FaBrain } from "react-icons/fa";
import { TbNurse } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";

const SideTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className='sideTabs'>
      <div className='sideTabsHeader container'>
        <h1>Comprehensive Healthcare
        Specialization and Solutions</h1>
        <p>At Benoux Staffing Agency, excellence is not just a goal; it's a commitment. We continuously strive to exceed expectations by providing reliable, efficient, and high-quality staffing services.</p>
      </div>
    <div className="side-tabs-container container">
      <div className="tabs">

        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}>
          Behavioral Health
          <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}>
            Nursing
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}>
            Medical
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab4')}>
            Mental Health
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab5')}>
            Telehealth
            <h2>Healthcare</h2>
        </div>


      </div>
      <div className="sideTabContent">
        
        {activeTab === 'tab1' && 
        <div>
          <h1>Behavioral Health</h1>
          <h2><FaBrain /></h2>
          <p>At Benoux Healthcare Staffing Agency, we understand the unique and critical needs of behavioral health services. Our dedicated team specializes in connecting top-tier professionals with healthcare organizations that require expertise in mental health and behavioral health care. Whether you are a facility looking for skilled professionals or a job seeker aiming to make a difference in the lives of those with mental health needs, Benoux is here to support you.</p>

          <h3>Why Choose Benoux for Behavioral Health Staffing?</h3>
          <p>We have an extensive network of qualified behavioral health professionals, including:</p>
          <ul>
            <li><BsDot /> Psychiatrists</li>
            <li><BsDot /> Psychologists</li>
            <li><BsDot /> Licensed Clinical Social Workers (LCSWs)</li>
            <li><BsDot /> Mental Health Counselors</li>
            <li><BsDot /> Psychiatric Nurses</li>
            <li><BsDot /> Behavioral Health Technicians</li>
            <li><BsDot /> Substance Abuse Counselors</li>

          </ul>
          </div>}


          {activeTab === 'tab2' &&         
        <div>
          <h1>Nursing</h1>
          <h2><TbNurse />
          </h2>
          <p>
          Are you looking for exceptional nursing staff to enhance your healthcare team? Benoux Agency Staffing specializes in providing top-tier nursing professionals for various healthcare settings. Whether you need temporary, permanent, or contract nursing staff, we are committed to delivering qualified candidates who meet your organization's unique requirements.</p>

          <h3>Our Nursing Staffing Services Include:</h3>
          <ul>
            <li><BsDot /> Registered Nurses (RNs): Highly skilled and experienced nurses capable of providing compassionate patient care across diverse specialties.</li>
            <li><BsDot /> Licensed Practical Nurses (LPNs): Proficient in delivering quality care under the supervision of RNs, ensuring patient comfort and safety.</li>
            <li><BsDot /> Certified Nursing Assistants (CNAs): Dedicated professionals trained to support patients with daily activities and provide essential care.</li>
            <li><BsDot /> Specialized Nurses: Experts in critical care, pediatrics, geriatrics, and other specialized areas, equipped to handle complex patient needs.</li>
          </ul>

          </div>}

          {activeTab === 'tab3' &&         
        <div>
          <h1>Medical</h1>
          <h2><FaHandHoldingMedical />
          </h2>
          <p>
          Benoux Agency Staffing specializes in comprehensive medical staffing solutions tailored to meet the unique needs of healthcare providers. Our dedicated team connects qualified healthcare professionals with top medical facilities, ensuring exceptional patient care and operational excellence. Discover how Benoux Agency Staffing can support your staffing needs and elevate your healthcare services.</p>
          </div>}

          {activeTab === 'tab4' &&         
        <div>
          <h1>Mental Health</h1>
          <h2><RiMentalHealthLine />
          </h2>
          <p>
          Benoux Agency Staffing understands the critical importance of mental health professionals in today's healthcare landscape. We specialize in connecting qualified mental health professionals with healthcare facilities in need of their expertise. Our comprehensive staffing solutions ensure that organizations can provide exceptional care to their patients. Whether you are looking for temporary placements or permanent staff, Benoux Agency Staffing is here to meet your mental health staffing needs with reliability and professionalism.</p>
          </div>}

    

          {activeTab === 'tab5' && 
        <div>
          <h1>Telehealth</h1>
          <h2><FaBrain /></h2>
          <p>Benoux Agency Staffing understands the evolving landscape of healthcare, especially with the increasing importance of telehealth services. We specialize in providing staffing solutions tailored for telehealth providers, ensuring access to skilled professionals who can deliver high-quality care remotely. Whether you are looking to expand your telehealth team or enhance your existing services, Benoux Agency Staffing is your trusted partner.</p>

          <h3>Why Choose Benoux Agency Staffing?</h3>
          <ul>
            <li><BsDot /> Expertise in Telehealth: We have a deep understanding of telehealth operations and the unique staffing needs associated with remote healthcare delivery.</li>
            <li><BsDot /> Comprehensive Screening: Our thorough screening process ensures that only the most qualified candidates are presented for your telehealth positions.</li>
            <li><BsDot /> Commitment to Excellence: We are committed to delivering excellence in telehealth staffing, supporting healthcare providers in delivering optimal patient care.</li>
          </ul>

          </div>}


        
      </div>
    </div>
    </div>
    </>
  );
};

export default SideTabs;