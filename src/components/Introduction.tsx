import React from "react";
const profilePhoto: any = require('../assets/imgs/profile-photo01.jpg');
require('../styles/introduction.css');

const Introduction = (): any => {

    return(
        <section id='intro'>
            <h1 id='profile-name'>Mohammed Elayo A.</h1>
            <div id='intro-and-pics'>
                <p id='profile-intro' className='large-p'>
                    A Versatile JavaScript/TypeScript Developer with expertise in MERN
                    stack. Skilled in developing engaging web apps. Proficient in both frontend and backend development.
                </p>
                <img id='profile-photo' alt="Mohammed Elayo A." src={profilePhoto} />
            </div>
        </section>
    )
}

export default Introduction;