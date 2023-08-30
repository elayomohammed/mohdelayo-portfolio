import React from "react";
require('../styles/footer.css');

const githubLogo = require('../assets/imgs/githubLogo.png');
const devtoLogo = require('../assets/imgs/devto-icon.png');
const emailIcon = require('../assets/imgs/email-icon.png');
const linkedinLogo = require('../assets/imgs/linkedin-icon.png');
const twitterLogo = require('../assets/imgs/twitter-icon.png');

const Footer:any = ():any => {
    return(
        <footer id="footer-section">
            <p id="social-note">
                JavaScript/Typescript frontend and backend developer available for work, connection and collaboration!
            </p>
            <div id="social-copyright">
                <div id="social">
                    <a href="https://github.com/elayomohammed" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={githubLogo} /></a>
                    <a href="https://www.linkedin.com/in/mohammed-elayo-ahmed-224448125" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={linkedinLogo} /></a>
                    <a href="https:twitter.com/MohdElayo" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={twitterLogo} /></a>
                    <a href="https://dev.to/elayomohammed" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={devtoLogo} /></a>
                    <a href="mailto:elayo.mohammed@gmail.com" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={emailIcon} /></a>
                </div>
            </div>
            <p id='copyright'>© Copyright - Mohammed E.A 2023</p>
        </footer>
    )
}

export default Footer;