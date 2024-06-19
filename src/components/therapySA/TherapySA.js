import React from "react";
import "./TherapySA.css";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const TherapySA = () => {
  return (
    <>
      <div className="therapySA">
        <div className="therapySA-content">
          <div className="therapySA-header container">
            <h1>OUR SUBSTANCE ABUSE PROGRAMS</h1>
            <p>
              Our compassionate staff utilizes established medical treatments to
              decrease withdrawal effects in an empathetic environment. In the
              meantime, you’ll receive behavioral health care from experienced
              counselors to boost your chances for an effective recovery.
            </p>
          </div>

          <div className="therapySA-flex container">

          <Fade left>
            <div className="therapySA-flexItem">
              <div className="flex-img">
                <img
                  src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
                  alt="Alcoholism"
                  loading="lazy"
                />
              </div>

              <div className="flex-caption">
                <h1>ALCOHOL ADDICTION</h1>
                <p>
                  Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.
                </p>
              </div>
            </div>
          </Fade>


          <Fade top>
            <div className="therapySA-flexItem">
              <div className="flex-img">
                <img
                  src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
                  alt="Alcoholism"
                  loading="lazy"
                />
              </div>

              <div className="flex-caption">
                <h1>HEROIN ADDICTION</h1>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="therapySA-flexItem">
              <div className="flex-img">
                <img
                  src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
                  alt="Alcoholism"
                  loading="lazy"
                />
              </div>

              <div className="flex-caption">
                <h1>COCAINE ADDICTION</h1>
                <p>
                  A highly addictive stimulant that affects the brain by
                  elevating levels of dopamine (a chemical associated with
                  reward or pleasure).
                </p>
              </div>
            </div>
            </Fade>
          </div>

          <LinkRoll
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Link to="/substance-abuse">
              <div className="therapySA-btn">
                <button>VIEW ALL</button>
              </div>
            </Link>
          </LinkRoll>
        </div>
      </div>
    </>
  );
};

export default TherapySA;
