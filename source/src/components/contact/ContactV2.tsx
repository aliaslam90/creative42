"use client";
import btnArrow from "@/assets/images/btn-arrow.svg";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactV2 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks For Your Message");
    }

    const [budgetValue, setBudgetValue] = useState(50);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBudgetValue(Number(event.target.value));
    };

    return (
        <>
            <div className="contact-sec-2">
                <div className="custom-container">
                    <form id="contactForm" className="contact-form" onSubmit={handleForm}>
                        <input type="hidden" name="access_key" />
                        <input type="hidden" name="from_name" />
                        <input type="hidden" name="subject" />
                        <div className="col-2">
                            <div className="input-group">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" name="first_name" id="first_name" placeholder="First name" autoComplete="off" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" name="last_name" id="last_name" placeholder="Last name" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="name@company.com" autoComplete="off" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="saas">What type of organization are you?</label>
                            <div className="radio-btns">
                                <div className="radio-btn">
                                    <input type="radio" id="saas" name="company_type" defaultValue="SAAS" defaultChecked />
                                    <label htmlFor="saas">Startup</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="agency" name="company_type" defaultValue="Agency" />
                                    <label htmlFor="agency">Agency</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="banking" name="company_type" defaultValue="Banking" />
                                    <label htmlFor="banking">Real Estate</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="business" name="company_type" defaultValue="Business" />
                                    <label htmlFor="business">Established Brand</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="other" name="company_type" defaultValue="Other" />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="app_design">What do you need from Creative42?</label>
                            <div className="checkbox-btns">
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="app_design" defaultValue="App Design" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">App / Product Design</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="web_design" defaultValue="Web Design" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Web Design</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="branding" defaultValue="Branding" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Branding</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="development" defaultValue="Development" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Development</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="cloud-service" defaultValue="Cloud Services" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Digital Campaign</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="other-service" defaultValue="Other" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Other</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="input-group">
                            <label htmlFor="pi_input">Estimated budget:</label>
                            <div className="input-group-budget">
                                <input id="pi_input" type="range" name="budget" min={10} max={150} step={5} value={budgetValue} onChange={handleInputChange} />
                                <div className="budget-values d-flex align-items-center justify-content-between w-full">
                                    <div className="left-value">AED 10K</div>
                                    <div className="right-value">AED <span id="budget-value">{budgetValue}</span>K</div>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" required defaultValue={""} />
                        </div>
                        <div className="input-group">
                            <div className="single-checkbox checkbox-btn">
                                <input type="checkbox" name="terms_condition" id="condition" />
                                <span className="checkbox-marker"><i className="las la-check" /></span>
                                <span className="checkbox-label">I agree to be contacted by Creative42.ai about this enquiry.</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="theme-btn">
                                Get Started
                                <Image loading="lazy" src={btnArrow} alt="icon" />
                            </button>
                        </div>
                        <div id="result" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactV2;
