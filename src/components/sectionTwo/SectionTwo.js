import React from 'react'
import './SectionTwo.css'
import CountUp from 'react-countup';



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
                    <h1>
                      <CountUp
                        start={0}
                        end={5}
                        duration={10}
                        suffix=""/>
                    </h1>
                    <h2>Years of healthcare recruiting experience</h2>

                </div>

                <div className='sectionTwoFlexItem'>
                    <h1>
                      <CountUp
                        start={0}
                        end={2250}
                        duration={15}
                        suffix=""/>
                    </h1>
                    <h2>New employees placed at healthcare organizations in 2023</h2>
                </div>

                <div className='sectionTwoFlexItem'>
                    <h1>
                      <CountUp
                        start={0}
                        end={35}
                        duration={15}
                        suffix=""/>
                    </h1>
                    <h2>Days time-to-fill for RPO engagements</h2>

                </div>

                <div className='sectionTwoFlexItem'>
                    <h1>
                      <CountUp
                        start={0}
                        end={96}
                        duration={15}
                        suffix="%"/>
                    </h1>
                    <h2>Satisfied clients</h2>

                </div>



            </div>
          </div>
        </div>
      </>  
      )
}

export default SectionTwo