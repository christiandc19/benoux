import React from 'react'
import './Services.css'
import servicesRpo from '../../assets/services_rpo.webp';
import servicesExecutiveSearch from '../../assets/services_executive_search.webp';
import servicesTalent from '../../assets/services_talent.webp';

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";



const Services = () => {
  return (
    <>
    
        <div className='services container'>

            <div className='servicesHeader'>
                <h1>Our Services</h1>
                <p>Recruitment Process Outsourcing (RPO) is a strategic partnership where an organization transfers all or part of its recruitment processes to an external service provider. RPO providers bring specialized expertise, advanced technology, and industry best practices to enhance the efficiency and effectiveness of the hiring process. Depending on the specific needs and goals of an organization, various RPO models can be employed to optimize recruitment efforts. Below are the primary RPO models:</p>
            </div>

            <div className='servicesContent'>

                <div class="servicesCard">
                    <div className='servicesCardimage'>
                        <img src={servicesRpo} alt='male nurse' loading='lazy' />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Recruitment Process Outsourcing (RPO)</h5>
                        <p class="card-text">Recruitment Process Outsourcing (RPO) is a form of business process outsourcing where an employer transfers all or part of its recruitment processes to an external service provider. </p>
                    </div>
                    <div className='servicesBtn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                            <Link to="/healthcare-rpo"><button>Learn More</button></Link>
                        </LinkRoll>
                    </div>
                </div>


                <div class="servicesCard">
                    <div className='servicesCardimage'>
                        <img src={servicesExecutiveSearch} alt='female nurse' loading='lazy' />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Executive Search</h5>
                        <p class="card-text">Executive search is a specialized recruitment service we offer, designed to identify and attract top-tier leadership talent for key executive roles within your organization.  This service goes beyond traditional recruitment, employing a comprehensive, strategic approach to ensure we find the perfect fit for your leadership needs.</p>
                    </div>
                    <div className='servicesBtn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                            <Link to="/healthcare-executive-search"><button>Learn More</button></Link>
                        </LinkRoll>
                    </div>
                </div>


                <div class="servicesCard">
                    <div className='servicesCardimage'>
                        <img src={servicesTalent} alt='female nurse' loading='lazy' />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Talent Consulting</h5>
                        <p class="card-text">Given the unique challenges and demands of the healthcare industry, talent consulting provides tailored solutions to ensure that healthcare organizations can attract, develop, and retain top talent.</p>
                    </div>
                    <div className='servicesBtn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                            <Link to="/talent-consulting"><button>Learn More</button></Link>
                        </LinkRoll>
                    </div>

                </div>

            </div>
        
        </div>
    
    </>
  )
}

export default Services