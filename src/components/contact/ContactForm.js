import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import Fade from 'react-reveal/Fade';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


// Popup message after send button is clicked
const feedbackEl = document.querySelector(".feedback");
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
feedbackEl.setAttribute("class", "feedback hidden");
}, 4000);


        //    Service Id                     Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<div className="bg">


<div className="contact2-header contact2-container">
            <h1>CONTACT BENOUX STAFFING</h1>
            <p>We look forward to hearing from you and working together to match the right professionals with the perfect opportunities!</p>
</div>


<section className="contact-container container">
<Fade left>
<div className="contact-cards-container">
    
    {/* <div class="get_form_inner2">
            <h2>CALL US</h2>
            <p><AiOutlinePhone /><a href="tel:2135844445"> +1 (213) 584-4445</a></p>
    </div> */}

    <div class="get_form_inner2">
            <h2>EMAIL</h2>
            <p><AiOutlineMail /> info@BenouxAgency.com  </p><br />
    </div>

    <div class="get_form_inner2">
            <h2>LOCATION</h2>
            <p><BsFillPinMapFill /> 750 N San Vicente Blvd, Suite 7A172, West Hollwood, CA 90069</p>
    </div>

</div>
</Fade>


          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                <input type="text" name='subject' placeholder='Subject' required /> <br/>
              </div>



              <div>
                <textarea name="message" placeholder="How can we help?" cols="30" rows="8" required></textarea>


                <div className="privacyPolicy">
                <p>Benoux Staffing needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.</p>
              </div>



                <input type="submit" value="Submit" />
              </div>


              <div className="feedback hidden">
              {/* <img  src= {myAvatar} alt='avatar'/> */}
              <textarea name="message2" cols="30" rows="3" required>Message Sent to Santa Monica Rehab!</textarea>
              </div>


            </form>
</div>

</section>
</div>



        </>
    )
}

export default ContactForm