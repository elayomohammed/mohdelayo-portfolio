import React from 'react';
import Project from './Project';
require('../styles/projectContainer.css');

const ebookshelves:any = {
    name: 'eBookshelves',
    url: 'https://e-bookshelves.vercel.app/index.html',
    github: 'https://github.com/elayomohammed/eBookshelves',
    info: "With eBookshelves, you can easily store, organize, and access your ebooks offline. It user-friendly interface allows you to quickly search, sort, and filter your ebooks to find exactly what you're looking for.",
    stack: 'HTML, CSS JavaScript, IndexedDB, Vercel'
};
const malinenergy:any = {
    name: 'Malinenergy',
    url: 'https://malinenergy.com',
    github: 'https://github.com/elayomohammed/malinenergy',
    info: "Malin Energy is a leading indigenous service provider, delivering innovative engineering, procurement, networking, and construction services in Nigeria's energy and oil and gas sector.",
    stack: 'HTML, CSS JavaScript, Whogohost'
};
const croudfundingproductpage:any = {
    name: 'Croud funding product page',
    url: 'https://croudfunding-productpage.vercel.app/',
    github: 'https://github.com/elayomohammed/croudfunding-productpage',
    info: "A broduct page for croud funding platform",
    stack: 'HTML, CSS JavaScript, Vercel'
};

const ProjectContainer = (): any => {
    return(
        <section id='project-container'>
            <h1 id='project-header'>Projects</h1>
            <Project data={ebookshelves} />
            <Project data={malinenergy} />
            <Project data={croudfundingproductpage} />
        </section>
    )
}

export default ProjectContainer;