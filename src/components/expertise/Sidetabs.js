import React, { useState } from 'react';
import './Sidetabs.css';

import { FaBrain } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { GiSpineArrow } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaEye } from "react-icons/fa";
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
          Chiropractors
          <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}>
            Dental
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab4')}>
            Home Health
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab5')}>
            Nursing
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab6' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab6')}>
            Medical
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab7' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab7')}>
            Mental Health
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab8' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab8')}>
            Pharmacies
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab9' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab9')}>
            Physical Therapy
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab10' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab10')}>
            Senior Living
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab11' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab11')}>
            Telehealth
            <h2>Healthcare</h2>
        </div>

        <div
          className={`tab ${activeTab === 'tab12' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab12')}>
            Biotechnology
            <h2>Life Sciences</h2>
        </div>



      </div>
      <div className="sideTabContent">
        
        {activeTab === 'tab1' && 
        <div>
          <h1>Behavioral Health</h1>
          <h2><FaBrain /></h2>
          <p>Behavioral health organizations need therapists, crisis counselors, and psychiatrists who can help patients overcome their battle with substance abuse and life stressors. If your organization is struggling to hire qualified therapists, our RPO experts can help.</p>
          </div>}

        {activeTab === 'tab2' && 
        <div>
          <h1>Chiropractors</h1>
          <h2><GiSpineArrow /></h2>
          <p>
          Benoux Agency can help staff your clinic with experienced chiropractors. Our recruitment strategies center around your unique goals and needs. We can quickly connect you to chiropractic professionals who will elevate patient care</p>
          </div>}

        {activeTab === 'tab3' &&         
        <div>
          <h1>Dental</h1>
          <h2><TbDental /></h2>

          <p>
          Is your practice struggling to find skilled hygienists and dentists? Benoux Agency understands the unique needs of the dental industry. We’ll leverage our extensive network and advanced technology to help you find qualified dental experts.</p>
          </div>}

          {activeTab === 'tab4' &&         
        <div>
          <h1>Home Health</h1>
          <h2><MdHealthAndSafety />
          </h2>
          <p>
          In-home caregivers must be compassionate, competent, and trustworthy. We take the time to understand your organization’s needs and work closely with you to develop strategies to identify, attract, hire, and retain quality candidates.</p>
          </div>}

          {activeTab === 'tab5' &&         
        <div>
          <h1>Nursing</h1>
          <h2><TbNurse />
          </h2>
          <p>
          High turnover rates, burnout, and tight labor markets are continuous challenges for healthcare executives. Our nursing recruitment strategies utilize industry-leading technology to quickly identify and hire caring, qualified nurses.</p>
          </div>}

          {activeTab === 'tab6' &&         
        <div>
          <h1>Medical</h1>
          <h2><FaHandHoldingMedical />
          </h2>
          <p>
          Our people-focused RPO and talent acquisition strategies can help you find quality candidates who fit your facility. We’ll find the best talent fast so you can continue doing what you do best—providing amazing patient care.</p>
          </div>}

          {activeTab === 'tab7' &&         
        <div>
          <h1>Mental Health</h1>
          <h2><RiMentalHealthLine />
          </h2>
          <p>
          Mental health facilities must identify highly skilled psychiatrists, psychologists, and therapists who offer kind and empathetic support. We will closely collaborate with you to identify and hire the skilled staff you need.</p>
          </div>}

          {activeTab === 'tab8' &&         
        <div>
          <h1>Optometry</h1>
          <h2><FaEye />
          </h2>
          <p>
          Our talent acquisition specialists work as an extension of your team to swiftly identify talented optometrists and reduce time-to-fill rates. We’ll equip your practice with the strategies it needs to succeed.</p>
          </div>}

          {activeTab === 'tab9' && 
        <div>
          <h1>Behavioral Health</h1>
          <h2><FaBrain /></h2>
          <p>Behavioral health organizations need therapists, crisis counselors, and psychiatrists who can help patients overcome their battle with substance abuse and life stressors. If your organization is struggling to hire qualified therapists, our RPO experts can help.</p>
          </div>}

          {activeTab === 'tab10' && 
        <div>
          <h1>Behavioral Health</h1>
          <h2><FaBrain /></h2>
          <p>Behavioral health organizations need therapists, crisis counselors, and psychiatrists who can help patients overcome their battle with substance abuse and life stressors. If your organization is struggling to hire qualified therapists, our RPO experts can help.</p>
          </div>}

          {activeTab === 'tab11' && 
        <div>
          <h1>Behavioral Health</h1>
          <h2><FaBrain /></h2>
          <p>Behavioral health organizations need therapists, crisis counselors, and psychiatrists who can help patients overcome their battle with substance abuse and life stressors. If your organization is struggling to hire qualified therapists, our RPO experts can help.</p>
          </div>}


          {activeTab === 'tab12' && 
        <div>
          <h1>Behavioral Health</h1>
          <h2><FaBrain /></h2>
          <p>Behavioral health organizations need therapists, crisis counselors, and psychiatrists who can help patients overcome their battle with substance abuse and life stressors. If your organization is struggling to hire qualified therapists, our RPO experts can help.</p>
          </div>}



      </div>
    </div>
    </div>
    </>
  );
};

export default SideTabs;