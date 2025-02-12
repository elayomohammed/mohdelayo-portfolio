import React from "react";
const profilePhoto: any = require('../assets/imgs/profile-photo01.jpg');
require('../styles/introduction.css');

const Introduction = (): any => {

    return (
        <section id='intro'>
            <h1 id='profile-name'>Mohammed Elayo A.</h1>
            <div id='intro-and-pics'>
                <p id='profile-intro' className='large-p'>
                    JavaScript, TypeScript, and Solidity Developer | Expert in full-stack web development for
                    both Web2 and Web3 applications. Skilled in crafting scalable, modern solutions
                    with a focus on seamless user experiences.
                </p>
                <img id='profile-photo' alt="Mohammed Elayo A." src={profilePhoto} />
            </div>
        </section>
    )
}

export default Introduction;
