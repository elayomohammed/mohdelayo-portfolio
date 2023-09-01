import React, {useState, useEffect} from "react";
import '../styles/header.css';
const menuOpen = require('../assets/imgs/menu-open.png');
const menuClose = require('../assets/imgs/menu-close.png');

const Header = (): any =>{
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [menuIsClose, setMenuIsClose] = useState(false);
    //const menuOpenClick = useRef(null);

    // handling menu button open and close clicks
    let handleMenuOpen:any;
    let handleMenuClose:any;
    useEffect(():any => {
        const navMenu:any = document.getElementById('nav-menu');
        handleMenuOpen = (event: any): any => {
            if(event){
                setMenuIsOpen(!menuIsOpen);
                navMenu.style.display = 'block';
                setMenuIsClose(true);
            }
        }
        handleMenuClose = (event: any): any => {
            if(event){
                setMenuIsClose(!menuIsClose);
                navMenu.style.display = 'none';
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
        </>
    );
};

export default Header;