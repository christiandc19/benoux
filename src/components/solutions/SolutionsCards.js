import React from 'react'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import './SolutionsCards.css'

const SolutionsCards = () => {
  return (

<>

<div class="SolutionsCards container">
      <div class="SolutionsCard service1">
        <div class="front">
          <h4>Recruitment Process Outsourcing (RPO)</h4>
        </div>
        <div class="back">
          <h3>Recruitment Process Outsourcing (RPO)</h3>
          <p>Recruitment Process Outsourcing (RPO) is a form of business process outsourcing where an employer transfers all or part of its recruitment processes to an external service provider. 
          <br/><br/>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/healthcare-rpo"><span> Learn More </span></Link>
            </LinkRoll>

          </p>
        </div>
      </div>
      <div class="SolutionsCard service2">
        <div class="front">
          <h4>Healthcare Executive Search</h4>

        </div>
        <div class="back">
          <h3>Healthcare Executive Search</h3>
          <p>Executive search is a specialized recruitment service we offer, designed to identify and attract top-tier leadership talent for key executive roles within your organization. 
            <br/><br/>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/healthcare-executive-search"><span> Learn More </span></Link>
            </LinkRoll>
          </p>
        </div>
      </div>
      <div class="SolutionsCard service3">
        <div class="front">
          <h4>Talent Consulting</h4>

        </div>
        <div class="back">
          <h3>Talent Consulting</h3>
          <p>Talent Consulting for Healthcare Staffing is a specialized service aimed at optimizing the recruitment, retention, and management of healthcare professionals.
          <br/><br/>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/talent-consulting"><span> Learn More </span></Link>
            </LinkRoll>
          </p>
        </div>
      </div>
    </div>

</>


  )
}

export default SolutionsCards