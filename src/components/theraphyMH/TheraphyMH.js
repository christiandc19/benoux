import React from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";

import "./TherapyMH.css";

import anxiety from '../../assets/anxiety.webp'
import depression from '../../assets/depression.webp'
import bipolar from '../../assets/bipolar.webp'

const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH">
        <div className="content">
          <Fade left>
            <div className="TherapyMH-left">
              <div className="left-content container">
                <h1>CONDITIONS WE TREAT</h1>
                <p>Recovery begins here.</p>
                <br />
              </div>
            </div>
          </Fade>

          <div className="TherapyMH-right container">
            <Fade left>
              <div className="box1 item">
                <div className="box-content">
                  <img src={anxiety} alt="depressed man"/>
                  <h1>ANXIETY</h1>
                  <p>
                  A persistent, often overwhelming feeling of apprehension or fear about future uncertainties, accompanied by physical symptoms such as increased heart rate and restlessness.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade top>
              <div className="box2 item">
                <div className="box-content">
                  <img src={bipolar} alt="depressed woman"/>
                  <h1>DEPRESSION</h1>
                  <p>
                  Persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities, often accompanied by physical symptoms like fatigue and changes in sleep and appetite.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="box3 item">
                <div className="box-content">
                <img src={depression} alt="depressed man"/>
                  <h1>BIPOLAR</h1>
                  <p>
                  Extreme mood swings between manic highs, marked by elevated energy and euphoria, and depressive lows, characterized by profound sadness and lethargy.
                  </p>
                </div>
              </div>
            </Fade>

            
          </div>

          <div className="TherapyMH-btn">
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/mental-health">
                <div className="TherapyMH-btn">
                  <button class="TherapyMH-cta">
                    <span>VIEW ALL</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Link>
            </LinkRoll>
          </div>

        </div>
      </div>
    </>
  );
};

export default TherapyMH;
