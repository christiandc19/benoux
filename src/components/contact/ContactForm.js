import React, { useRef } from "react";
// import { BsFillPinMapFill } from 'react-icons/bs';
// import { AiOutlineMail } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import CallUs from '../../assets/call_us.webp';


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

<section className="contact-container container">
<div className="contactFormLeft">
      <img src={CallUs} alt="Professional Woman" loading="lazy"/>
</div>


          <div class="contactFormRight">

            <div class="get_form_inner_text">

              <h1>Get In Touch</h1>
              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='job' placeholder='Job title' required /> <br/>
                <input type="text" name='company' placeholder='Company name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                {/* <input type="text" name='subject' placeholder='Subject' required /> <br/> */}
              </div>
              <div>
                <textarea name="message" placeholder="How can we help?" cols="30" rows="10" required></textarea>

                <div className="disclaimer">
                  <p>Benoux Staffing needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                  </LinkRoll></p>
          </div>



                <input type="submit" value="Submit" />
              </div>


              <div className="feedback hidden">
              {/* <img  src= {myAvatar} alt='avatar'/> */}
              <textarea name="message2" cols="30" rows="3" required>Message Sent to Benoux Agency!</textarea>
              </div>


            </form>
</div>

</section>
</div>



        </>
    )
}

export default ContactForm