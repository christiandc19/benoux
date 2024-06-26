import React from 'react'

import Navbar from '../components/navbar/Navbar'
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy'
import PrivacyPolicySection from '../components/privacyPolicy/PrivacyPolicySection'

import Footer from '../components/footer/Footer'

const PrivacyPolicyPage = () => {
    return (
        <>
           <Navbar /> 
           <PrivacyPolicy />
           <PrivacyPolicySection />
           <Footer />
        </>
    )
}

export default PrivacyPolicyPage
