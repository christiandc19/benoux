import React from 'react'
import Gauge from './Gauge'
import './SectionTwo.css'



const SectionTwo = () => {
  return (
<>
            <div class="sectionTwo">

            <div className="sectionTwoHeader container">
                <h1>Over 2200 healthcare professionals placed in 5 years of dedicated service.</h1>
            </div>
         

            <div className="container about-skills-container">

              <div className='sectionTwoFlex'>
                <div className='sectionTwoFlexItem'>
                  <Gauge
                      Gauge="5"
                      Name="years of healthcare recruiting experience"
                      ClassName="recruiting_experience"
                  />
                </div>

                <div className='sectionTwoFlexItem'>
                  <Gauge
                      Gauge="2,250"
                      Name="new employees placed at healthcare organizations in 2023"
                      ClassName="new_employees"
                  />
                </div>


                <div className='sectionTwoFlexItem'>
                <Gauge
                    Gauge="35"
                    Name="days time-to-fill for RPO engagements"
                    ClassName="days" />

              </div>


              <div className='sectionTwoFlexItem'>
                <Gauge
                    Gauge="96%"
                    Name="satisfied clients"
                    ClassName="satisfied_clients" />
              </div>

            </div>



            </div>
            </div>
            </>  )
}

export default SectionTwo