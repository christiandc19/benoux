import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import emailjs from 'emailjs-com';
import CallUs from '../../assets/call_us.webp';

import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");
    const [userType, setUserType] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_bdfl0ie", "template_4v0anwu", form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
                setButtonText("Message Sent!");
                setTimeout(() => {
                    setButtonText("Submit");
                }, 4000);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        setUserType(""); // Reset userType after submission
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    return (
        <>
            <div className="bg">
                <section className="contact-container container">
                    <div className="contactFormLeft">
                        <img src={CallUs} alt="Professional Woman" loading="lazy" />
                    </div>
                    <div className="contactFormRight">
                        <div className="get_form_inner_text">
                            <h1>Get In Touch</h1>
                            <p><i>We'll keep your contact information strictly confidential.</i></p><br />
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="inputs">
                                <input 
                                    type="text" 
                                    name='name' 
                                    placeholder='Your Name' 
                                    required 
                                    pattern="[A-Za-z\s]+" 
                                    title="Please enter a valid name using letters only."
                                /> 
                                <br />
                                <input 
                                    type="email" 
                                    name='email' 
                                    placeholder='Your Email' 
                                    required 
                                /> 
                                <br />
                                <input 
                                    type="tel" 
                                    name='phone' 
                                    placeholder='Your Phone' 
                                    required 
                                    pattern="\d{10,15}" 
                                    title="Please enter a valid phone number with 10 to 15 digits."
                                /> 
                                <br />
                                <label className="userTypeLabel">Are you an Employer or an Applicant?</label><br />
                                <select 
                                    name="userType" 
                                    value={userType} 
                                    onChange={handleUserTypeChange} 
                                    required
                                >
                                    <option value="" disabled>Select One</option>
                                    <option value="Employer">Employer</option>
                                    <option value="Applicant">Applicant</option>
                                </select>
                                <br />
                                {userType === "Employer" && (
                                    <>
                                        <input 
                                            type="text" 
                                            name='company' 
                                            placeholder='Company Name' 
                                            required 
                                            pattern="[A-Za-z0-9\s]+" 
                                            title="Please enter a valid company name using letters only."
                                        /> 
                                        <br /><br />
                                    </>
                                )}
                                {userType === "Applicant" && (
                                    <>
                                        <input 
                                            type="text" 
                                            name='position' 
                                            placeholder='Desired Healthcare Position' 
                                            required 
                                            pattern="[A-Za-z\s]+" 
                                            title="Please enter a valid position using letters only."
                                        /> 
                                        <br /><br />
                                    </>
                                )}
                            </div>
                            <div>
                                <textarea 
                                    name="message" 
                                    placeholder="How can we help?" 
                                    cols="30" 
                                    rows="10" 
                                    required
                                ></textarea>

                                <div className="disclaimer">
                                    <p>Benoux Staffing needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                        <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                                    </LinkRoll></p>
                                </div>

                                <input 
                                    type="submit" 
                                    value={buttonText} 
                                    disabled={buttonText !== "Submit"}
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactForm;
