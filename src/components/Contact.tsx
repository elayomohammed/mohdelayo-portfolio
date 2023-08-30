import React from "react";
require("../styles/contact.css");

const locationIcon: any = require("../assets/imgs/location-icon.png");
const phoneIcon: any = require("../assets/imgs/phone-icon.png");
const emailIcon: any = require("../assets/imgs/email-icon.png");;

const Contact: any = (): any => {
    return(
        <section id="contact-section">
            <div id="contact-title-note">
                <h1 id="contact-title">Get in Touch</h1>
                <p id="contact-note">
                    Experienced in both frontend and backend JavaScript, I'm here for your projects and collaboration. Let's create together, whether 
                    UI or server tasks. Connect to chat about ideas. Eager to work with you!
                </p>
            </div>
            <div id="address-contact-form">
                <address id="address">
                    <div id="location">
                        <img alt="" className="contact-icon" src={locationIcon} />
                        <p id=""> Abuja, Nigeria</p>
                    </div>
                    <div id="phone">
                        <a href="tel:+2348093931832"><img alt="" className="contact-icon" src={phoneIcon} /></a>
                        <p id=""> +2348093931832</p>
                    </div>
                    <div id="email">
                        <a href="mailto:elayo.mohammed@gmail.com"><img id="s-email" alt="" className="contact-icon" src={emailIcon} /></a>
                        <p id=""> elayo.mohammed@gmail.com</p>
                    </div>
                </address><br /><br />
                <form id="contact-form">
                    <div id="name-email">
                        <label htmlFor="name">Name </label><br /><input id="name" type="text" required /><hr />
                        <label htmlFor="email">Email </label><br /><input id="email" type="email" required /><hr />
                    </div>
                    <label htmlFor="subject">Subject </label><br /><input id="subject" type="text" required /><hr />
                    <label htmlFor="message">Message </label><br /><textarea id="message" required /><hr />
                    <button id="submit" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;