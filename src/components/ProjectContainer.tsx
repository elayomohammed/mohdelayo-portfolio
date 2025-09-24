import React from 'react';
import Project from './Project';
require('../styles/projectContainer.css');

type ProjectDetails = {
    name: string,
    url: string,
    github: string,
    info: string,
    stack: string,
}

const ebookshelves: ProjectDetails = {
    name: 'eBookshelves',
    url: 'https://e-bookshelves.vercel.app/index.html',
    github: 'https://github.com/elayomohammed/eBookshelves',
    info: "With eBookshelves, you can easily store, organize, and access your ebooks offline. It user-friendly interface allows you to quickly search, sort, and filter your ebooks to find exactly what you're looking for.",
    stack: 'HTML, CSS JavaScript, IndexedDB, Vercel'
};
const malinenergy: ProjectDetails = {
    name: 'Malinenergy',
    url: 'https://malinenergy.com',
    github: 'https://github.com/elayomohammed/malinenergy',
    info: "Malin Energy is a leading indigenous service provider, delivering innovative engineering, procurement, networking, and construction services in Nigeria's energy and oil and gas sector.",
    stack: 'Node.js, React.js, Whogohost'
};
const croudfundingproductpage: ProjectDetails = {
    name: 'Croud funding product page',
    url: 'https://croudfunding-productpage.vercel.app/',
    github: 'https://github.com/elayomohammed/croudfunding-productpage',
    info: "A broduct page for croud funding platform",
    stack: 'HTML, CSS JavaScript, Vercel'
};

const fic: ProjectDetails = {
    name: 'Foundation for Intentional Community',
    url: 'https://www.ic.org/',
    github: '',
    info: "A resource hub for intentional communities movement.",
    stack: 'WordPress'
};

const nairapulse: ProjectDetails = {
    name: 'Naira Pulse',
    url: 'https://nairapulse.vercel.app',
    github: 'https://github.com/elayomohammed/website-nairapulse',
    info: "A Go-To Platform for Accurate, Up-to-Date Exchange Rates",
    stack: 'Node.js, Next.js, Namecheap'
};

const shopamish: ProjectDetails = {
    name: 'Shop Amish',
    url: 'https://www.shop-amish.com',
    github: '',
    info: "An ecommerce platform with specialization in premium lifestyle products that enhance everyday beverage experience.",
    stack: 'WordPress, WooCommerce'
}

const sapaDeals: ProjectDetails = {
    name: 'Sapa Deals',
    url: 'https://www.sapadeals.com',
    github: '',
    info: "A smart, simple, and reliable source for the best tech and gadget deals across Nigeria and beyond. Track discounts, compare offers, and provide clear insights so you can shop with confidence.",
    stack: 'WordPress'
}

const ProjectContainer = (): any => {
    return (
        <section id='project-container'>
            <h1 id='project-header'>Projects</h1>
            <Project data={sapaDeals} />
            <Project data={nairapulse} />
            <Project data={malinenergy} />
            <Project data={fic} />
            <Project data={shopamish} />
            <Project data={ebookshelves} />
            <Project data={croudfundingproductpage} />
        </section>
    )
}

export default ProjectContainer;
