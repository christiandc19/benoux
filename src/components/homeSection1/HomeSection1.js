import React from "react";
import "./HomeSection1.css";
import Integrity from '../../assets/Integrity.webp'
import Excellence from '../../assets/Excellence.webp'
import Respect from '../../assets/Respect.webp'
import Accountability from '../../assets/Accountability.webp'
import Growth from '../../assets/Growth.webp'

const HomeSection1 = () => {
  return (
    <>
      <div className="section1">
        <div className="section1-header container">
          <h1>Our Values</h1>
          <p>
            At Benoux Healthcare Staffing Agency, we are driven by a set of core values that define who we are and how we operate. These values guide our actions, shape our culture, and serve as the foundation for our commitment to excellence in healthcare recruitment.          
          </p>
        </div>

        <div className="section1-cards container">
          <div className="wwa-cards-contents">

          <div className="card">
                  <h1>Integrity</h1>
                  <img src={Integrity} alt="Integrity" loading="lazy"/>
                  <p>
                  We build trust with our clients and candidates by being straightforward and reliable in all our interactions.
                  </p>
            </div>


            <div className="card">
                  <h1>Excellence</h1>
                  <img src={Excellence} alt="Integrity" loading="lazy"/>
                  <p>
                  Our rigorous recruitment process ensures that we connect the best talent with the right opportunities.
                  </p>
            </div>


            <div className="card">
                  <h1>Respect</h1>
                  <img src={Respect} alt="Integrity" loading="lazy"/>
                  <p>
                  This respect extends to our clients, candidates, and team members, fostering a positive and inclusive work environment.
                  </p>
            </div>

            <div className="card">
                  <h1>Accountability</h1>
                  <img src={Accountability} alt="Integrity" loading="lazy"/>
                  <p>
                  We set high standards, regularly review our performance, and continuously seek ways to improve our services.
                  </p>
            </div>

            <div className="card">
                  <h1>Growth</h1>
                  <img src={Growth} alt="Integrity" loading="lazy"/>
                  <p>
                  We support the growth of our clients and candidates by helping them achieve their career aspirations and organizational goals.
                  </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
