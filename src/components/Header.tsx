import React, {useState} from "react";
import '../styles/header.css'
const menuOpen = require('../assets/imgs/menu-open.png');
const menuClose = require('../assets/imgs/menu-close.png');
const img360 = require('../assets/imgs/profile-photo01.jpg')

const Header = (): any =>{
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [menuIsClose, setMenuIsClose] = useState(false);
    //const menuOpenClick = useRef(null);

    // handling menu button open and close clicks
    const handleMenuOpen = (event: any): any => {
        if(event){
            setMenuIsOpen(!menuIsOpen);
            setMenuIsClose(true);
        }
    }
    const handleMenuClose = (event: any): any => {
        if(event){
            setMenuIsClose(!menuIsClose);
            setMenuIsOpen(true);
        }
    }
    
    return (
        <>
        <header id='portfolio-head'>
            <div id='avatar'>
                <img id='img360' alt='' src={img360} />
            </div>
            <div id='menu-btn' >
                {menuIsOpen? <img id='menu-open' className='img360' alt='' src={menuOpen} onClick={(event) => handleMenuOpen(event)} /> : ''}
                {menuIsClose? <img id='menu-close' className='img360' alt='' src={menuClose} onClick={(event) => handleMenuClose(event)} /> : ''}
            </div>
        </header>
        </>
    );
};

export default Header;