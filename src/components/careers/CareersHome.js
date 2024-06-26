import React from 'react'
import './CareersHome.css'
import InsuranceHomeImg from "../../assets/nurses.webp";



const CareersHome = () => {
    return (
        <>
            <div className='careersHome'>
                <div className='careersHomeFlex'>

                    <div className='careersHomeLeft container'>
                        <h1>Join us in our mission to make a difference in healthcare, one placement at a time.</h1>
                    
                        <img src={InsuranceHomeImg} alt="Happy Family" loading="lazy" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default CareersHome
