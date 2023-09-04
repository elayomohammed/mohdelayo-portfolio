import React, {useState, useEffect} from "react";
require('../styles/header.css');
require('../styles/footer.css');

const menuOpen = require('../assets/imgs/menu-open.png');
const menuClose = require('../assets/imgs/menu-close.png');

const githubLogo = require('../assets/imgs/githubLogo.png');
const devtoLogo = require('../assets/imgs/devto-icon.png');
const emailIcon = require('../assets/imgs/email-icon.png');
const linkedinLogo = require('../assets/imgs/linkedin-icon.png');
const twitterLogo = require('../assets/imgs/twitter-icon.png');
const myresume:any = require('../assets/pdfs/MohammedElayoAhmed.pdf');

//header component
const Header = (): any =>{
    let [menuIsOpen, setMenuIsOpen] = useState(true);
    let [menuIsClose, setMenuIsClose] = useState(false);

    // handling menu button open and close clicks
    let handleMenuOpen:any;
    let handleMenuClose:any;
    let handleNavClicked:any;
    
    useEffect(():any => {
        const navMenu:any = document.getElementById('nav-menu');
        handleMenuOpen = (event: any): any => {
            if(event){
                setMenuIsOpen(!menuIsOpen);
                navMenu.style.display = 'block';
                setMenuIsClose(!menuIsClose);
            }
        }
        handleMenuClose = (event: any): any => {
            if(event){
                setMenuIsClose(!menuIsClose);
                navMenu.style.display = 'none';
                setMenuIsOpen(!menuIsOpen);
            }
        }
        handleNavClicked = (event:any): any => {
            if(event){
                navMenu.style.display = 'none';
                setMenuIsClose(false);
                setMenuIsOpen(true);
            }
        }
    },[menuIsOpen, menuIsClose]);
    
    return (
        <>
        <header id='portfolio-head'>
            <div id='avatar'>
                <h1 id='img360'>MEA</h1>
            </div>
            <div id='menu-btn' >
                {menuIsOpen? <img id='menu-open' alt='' src={menuOpen} onClick={(event) => handleMenuOpen(event)} /> : ''}
                {menuIsClose? <img id='menu-close' alt='' src={menuClose} onClick={(event) => handleMenuClose(event)} /> : ''}
            </div>
        </header>
        <nav id="nav-menu">
            <div id="nav-body">
                <h1 id="meet-me">Meet Me</h1>
                <ul onClick={(event)=>{handleNavClicked(event)}}>
                    <li><a href="#intro" className="nav-link">About Me</a></li>
                    <li><a href="#project" className="nav-link">My Projects</a></li>
                    <li><a href="#contact-section" className="nav-link">Contact Me</a></li>
                    <li><a href={myresume} id="resume" className="nav-link" download>Download My Resume</a></li>
                </ul>
            </div><hr id="menu-hr" />
            <div id="nav-foot">
                <div>
                    <h1 id="nav-foot-head">
                        Want Your Idea Developed?
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
        </>
    );
};

export default Header;