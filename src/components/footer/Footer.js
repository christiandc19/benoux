import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/hero-logo.png'
import "./FooterStyles.css";
import { MdAlternateEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";


import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/'>
                  <img src={logo} alt="Oxnard Rehab Logo" loading="lazy"/>
                </Link>
              </LinkRoll>
            </div>


            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>



          </div>



          <div className="col-container">


{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

{/* JOB */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/healthcare-recruitment-solutions">
                    <p>Healthcare Solutions</p>
                  </Link>
                </LinkRoll>
              </div>


{/* CONTACT */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <p>Call Us</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>



            <div className="col">
              <h3>Services</h3>

{/* DETOX */}
              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Recruitment Process Outsourcing</p>
                  </Link>
                </LinkRoll>
              </div>

{/* RESIDENTIAL */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/healthcare-executive-search">
                    <p>Executive Search</p>
                  </Link>
                </LinkRoll>
              </div>

{/* PHP */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/expertise">
                    <p>Expertise</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>


{/* Contact */}
            <div className="col">
              <h3>CONTACT</h3>

              <div>
                  <p><span><FaPhone  /><a href="tel:3232710351"> +1 (323) 271-0351</a></span></p>
              </div>

              <div>
                  <p><span><MdAlternateEmail  /><a href = "mailto: abc@example.com">info@BenouxAgency.com</a></span></p>
              </div>

              <div>
                  <p><span><FiMapPin  /></span> 750 N San Vicente Blvd. Suite 7A172, West Hollywood, CA 90069</p>
              </div>

            </div>
          </div>








          <p className="copyright">
            <p>
              &copy; 2024 Benoux Agency All rights reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
