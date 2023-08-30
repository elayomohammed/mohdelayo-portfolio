import React from 'react';
require('../styles/project.css');
const gotoIcon: any = require('../assets/imgs/goto-icon.png');
const githubLogo: any = require('../assets/imgs/githubLogo.png');

const Project = (prop: any):any => {
    return(
        <div id='project'>
            <a href={prop.data.url}>
                <embed id='project-embed' title={prop.data.name} src={prop.data.url} />
            </a>
            <div id='project-name-links'>
                <a href={prop.data.url} target='_blank'>
                    <h3 id='project-name'>{prop.data.name}</h3>
                </a>
                <div id='project-links'>
                    <a href={prop.data.github} target='_blank'>
                        <img id='project-git' className='logo-icon' alt='' src={githubLogo} />
                    </a>
                    <a href={prop.data.url} target='_blank'>
                        <img id='goto-project' className='logo-icon' alt='' src={gotoIcon} />
                    </a>
                </div>
            </div>
            <p id='project-info'>{prop.data.info}<br /><br /><em id='project-stack-span'>Tech Stack: {prop.data.stack}</em></p>
        </div>
    )
}

export default Project;