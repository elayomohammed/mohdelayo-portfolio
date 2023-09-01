import React from "react";
require('../styles/footer.css');
require('../styles/menunavs.css');

const githubLogo = require('../assets/imgs/githubLogo.png');
const devtoLogo = require('../assets/imgs/devto-icon.png');
const emailIcon = require('../assets/imgs/email-icon.png');
const linkedinLogo = require('../assets/imgs/linkedin-icon.png');
const twitterLogo = require('../assets/imgs/twitter-icon.png');

const Menunavs:any = ():any => {
    return(
        <nav id="nav-menu">
            <div id="nav-body">
                <h1 id="meet-me">Meet Me</h1>
                <ul>
                    <li><a href="#intro" className="nav-link">About Me</a></li>
                    <li><a href="#project" className="nav-link">My Projects</a></li>
                    <li><a href="#contact-section" className="nav-link">Contact Me</a></li>
                    <li><a href="#wel" id="resume" className="nav-link">Download My Resume</a></li>
                </ul>
            </div><hr />
            <div id="nav-foot">
                <div>
                    <h1 id="nav-foot-head">
                        Want to developed an idea?
                    </h1>
                    <p id="nav-paragraph">
                        Lets brainstorm on it.
                    </p>
                </div>
                <div id="social">
                    <a href="https://github.com/elayomohammed" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={githubLogo} /></a>
                    <a href="https://www.linkedin.com/in/mohammed-elayo-ahmed-224448125" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={linkedinLogo} /></a>
                    <a href="https:twitter.com/MohdElayo" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={twitterLogo} /></a>
                    <a href="https://dev.to/elayomohammed" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={devtoLogo} /></a>
                    <a href="mailto:elayo.mohammed@gmail.com" target="_blank" rel="noopener noreferrer"><img className="social-icon" alt="" src={emailIcon} /></a>
                </div>
            </div>
        </nav>
    )
}

export default Menunavs;