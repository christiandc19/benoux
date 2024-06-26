import React from 'react'
import './Whoweare.css'
import Zoom from 'react-reveal/Zoom';

import { BsCheckLg } from 'react-icons/bs';
import WhoWeAre from '../../assets/female_nurse.webp'


const Whoweare = () => {
  return (
<>

<div className='homeSection2 '>
        <div className='homeSection2-content container'>

            <div className='homeSection2-left'>

            <h1>About Benoux Staffing</h1>
                <p>At Benoux Staffing Agency, we specialize in recruiting top-tier healthcare professionals across various specialties, including but not limited to:</p> <br /> <br />
                             
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Advanced Practice Providers (APP)</p>
                    </div>
                </div>    

                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Advanced Practice Providers (APP)</p>
                    </div>
                </div> 

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> CNA’s & Medical Assistants</p>
                    </div>
                </div>  

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Allied Health Professionals</p>
                    </div>
                </div>

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Physical Therapists</p>
                    </div>
                </div>

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Behavior Health Professionals</p>
                    </div>
                </div>

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Dental Professionals</p>
                    </div>
                </div>

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Health Tech Professionals</p>
                    </div>
                </div>

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Pharmacists</p>
                    </div>
                </div>

                <div className='checklist'>
                    <div className='homeSection2-icon'>
                        <BsCheckLg />
                    </div>
                    <div>
                        <p> Administrative Staff</p>
                    </div>
                </div>
            </div>



        <Zoom duration={2000}>
            <div className='homeSection2-right'>
                    <img src={WhoWeAre} loading="lazy" alt='psychologist'/>
            </div>
        </Zoom>

        </div>

      </div>


</>
  )
}

export default Whoweare