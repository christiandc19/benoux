import React, { useState } from 'react';
import './Sidetabs.css';
import { BsDot } from "react-icons/bs";

import { FaBrain } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { GiSpineArrow } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { TbNurse } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiBodyBalance } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";

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
            Optometry
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
          <h1>Chiropractors</h1>
          <h2><GiSpineArrow /></h2>
          <p>
          Are you seeking skilled chiropractic professionals to enhance your healthcare team? Benoux Agency Staffing specializes in connecting healthcare facilities with qualified chiropractors who bring expertise and dedication to patient care. Whether you're looking to fill temporary or permanent positions, our tailored staffing solutions ensure you find the right fit for your organization.</p>
          </div>}

        {activeTab === 'tab3' &&         
        <div>
          <h1>Dental</h1>
          <h2><TbDental /></h2>

          <p>
          Benoux Agency Staffing specializes in providing comprehensive staffing solutions tailored specifically for the dental industry. Our agency understands the unique staffing challenges faced by dental practices and is dedicated to connecting qualified professionals with rewarding career opportunities. Whether you're looking to hire skilled dental professionals or seeking new career opportunities in the dental field, Benoux Agency Staffing is here to assist you every step of the way.</p>
          </div>}

          {activeTab === 'tab4' &&         
        <div>
          <h1>Home Health</h1>
          <h2><MdHealthAndSafety />
          </h2>
          <p>
          Welcome to Benoux Agency Staffing, your trusted partner in home health care staffing solutions. At Benoux, we specialize in connecting compassionate and qualified healthcare professionals with home health agencies nationwide. Our mission is to enhance the quality of life for patients by ensuring they receive exceptional care from dedicated caregivers.</p><br/>
          <p>Whether you're seeking skilled nurses, certified aides, or specialized therapists, Benoux Agency Staffing is committed to providing personalized staffing solutions tailored to your specific needs. With our extensive network and rigorous screening process, we ensure that only the most competent and caring professionals join your team.</p><br/>
          <p>Discover how Benoux Agency Staffing can support your home health care needs. Contact us today to learn more about our comprehensive staffing services.

</p>
          </div>}

          {activeTab === 'tab5' &&         
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

          {activeTab === 'tab6' &&         
        <div>
          <h1>Medical</h1>
          <h2><FaHandHoldingMedical />
          </h2>
          <p>
          Benoux Agency Staffing specializes in comprehensive medical staffing solutions tailored to meet the unique needs of healthcare providers. Our dedicated team connects qualified healthcare professionals with top medical facilities, ensuring exceptional patient care and operational excellence. Discover how Benoux Agency Staffing can support your staffing needs and elevate your healthcare services.</p>
          </div>}

          {activeTab === 'tab7' &&         
        <div>
          <h1>Mental Health</h1>
          <h2><RiMentalHealthLine />
          </h2>
          <p>
          Benoux Agency Staffing understands the critical importance of mental health professionals in today's healthcare landscape. We specialize in connecting qualified mental health professionals with healthcare facilities in need of their expertise. Our comprehensive staffing solutions ensure that organizations can provide exceptional care to their patients. Whether you are looking for temporary placements or permanent staff, Benoux Agency Staffing is here to meet your mental health staffing needs with reliability and professionalism.</p>
          </div>}

          {activeTab === 'tab8' &&         
        <div>
          <h1>Optometry</h1>
          <h2><FaEye />
          </h2>
          <p>
          Benoux Agency Staffing specializes in connecting skilled optometry professionals with top-tier opportunities across various healthcare settings. Our comprehensive staffing solutions ensure that optometry practices and clinics find the right talent to enhance their patient care and operational efficiency.</p>

          <h3>Why Choose Benoux Agency Staffing?</h3>
          <ul>
            <li><BsDot /> Expertise in Optometry: With a deep understanding of the optometry field, we ensure that candidates meet the specific needs of your practice.</li>
            <li><BsDot /> Streamlined Recruitment Process: Our rigorous screening and evaluation process ensures that only the most qualified candidates are presented to you.</li>
            <li><BsDot /> Commitment to Quality: We are dedicated to excellence in staffing solutions, providing ongoing support to both clients and candidates.</li>
          </ul>
          </div>}
          

          {activeTab === 'tab9' && 
        <div>
          <h1>Physical Therapy</h1>
          <h2><GiBodyBalance /></h2>
          <p>Benoux Agency Staffing is dedicated to connecting skilled physical therapists with healthcare facilities in need of their expertise. Whether you're a healthcare professional seeking new opportunities or a facility looking to fill critical roles, we specialize in providing tailored staffing solutions to meet your specific needs.</p>
          </div>}

          {activeTab === 'tab10' && 
        <div>
          <h1>Senior Living</h1>
          <h2><FaHandHoldingMedical   /></h2>
          <p>Behavioral health organizations need therapists, crisis counselors, and psychiatrists who can help patients overcome their battle with substance abuse and life stressors. If your organization is struggling to hire qualified therapists, our RPO experts can help.</p>
          </div>}

          {activeTab === 'tab11' && 
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


          {activeTab === 'tab12' && 
        <div>
          <h1>Biotechnology</h1>
          <h2><MdBiotech /></h2>
          <p>At Benoux Agency Staffing, we specialize in connecting top-tier talent with leading organizations in the biotechnology sector. Our comprehensive staffing solutions are designed to meet the unique needs of biotechnology companies, ensuring they have the skilled professionals necessary to drive innovation and advancement in the field.</p>

          <h3>Our Expertise</h3>
          <p>Industry Knowledge: Our team of recruiters possesses deep expertise in the biotechnology industry. We understand the intricate demands of this sector, from research and development to regulatory compliance and commercialization.</p><br/>
          <p>Specialized Roles: We recruit for a wide range of roles within biotechnology, including but not limited to:</p>
          <ul>
            <li><BsDot /> Research Scientists</li>
            <li><BsDot /> Biomedical Engineers</li>
            <li><BsDot /> Clinical Research Associates</li>
            <li><BsDot /> Regulatory Affairs Specialists</li>
            <li><BsDot /> Bioinformatics Analysts</li>
            <li><BsDot /> Quality Assurance Managers</li>
          </ul>
          </div>}



      </div>
    </div>
    </div>
    </>
  );
};

export default SideTabs;