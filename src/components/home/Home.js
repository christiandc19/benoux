import React from 'react'
import SectionThree from '../SectionThree/sectionThree';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import HomeSection1 from '../homeSection1/HomeSection1';
import CareersHome from '../careers/CareersHome';
import SectionTwo from '../sectionTwo/SectionTwo';
import SideTabs from '../expertise/Sidetabs';



const home = () => {
  return (
    <>
    <SectionThree />
    <SectionTwo />
    <SideTabs />
    <HomeSection1 />
    <Whoweare />
    <ContactForm />
    <CareersHome />

    </>
  )
}

export default home
