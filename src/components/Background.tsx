import React from "react";
require('../styles/background.css');

const Background = (): any => {
    return(
        <section id='background-and-stack'>
            <div id='background-container'>
                <h1 className="bg-stack-title">Background</h1>
                <p className='large-p' id='background'>
                I'm a passionate Full Stack JavaScript/TypeScript 
                Programmer with a knack for crafting dynamic digital experiences. My journey 
                has been one of self-driven learning, where I've mastered the art of creating 
                progressive web applications that captivate and engage users.<br /><br />
                I'm equally comfortable at the front-end and back-end of development. From 
                wrangling data to shaping seamless user interfaces, I thrive on bridging the 
                digital world's creative and functional aspects.<br /> <br />
                My path has been shaped by real-world challenges. As a self-taught developer, 
                I've not only honed my technical prowess but also developed an exceptional 
                problem-solving approach with an eye for detail, 
                ensuring top-tier quality in every solution I create. My expertise also spans 
                technical content creation, SEO strategies, user experience (UX) design and blockchain/cryptocurrency/web3.<br /><br />
                My journey has taken me from the world of Geography to the heart of tech innovation. 
                With experience in agricultural extension and community engagement, I've developed 
                the versatility to connect with diverse audiences. This ability to collaborate across 
                teams and engage communities has seamlessly merged with my technical skills, making 
                me a valuable asset in any project's life cycle.<br /><br />
                When I'm not immersed in code, you'll find me exploring emerging technologies and 
                refining my craft. I believe in the power of continuous learning to stay at the 
                forefront of this ever-evolving field.<br /><br />
                I invite you to explore my portfolio, where you'll witness my passion for crafting 
                captivating user experiences that resonate with the digital world. Let's collaborate 
                and create something extraordinary together!
                </p>
            </div>
            <div id='stack-container'>
                <h1 className="bg-stack-title">Programming Stack</h1>
                <ol className='large-p' style={{listStyle: 'none', marginLeft: '0px', paddingLeft: '0px'}}>
                    <li>
                        <span id='lang-span'>Languages:</span> Javascript, Typescript, Html, Css, Sass
                    </li>
                    <li>
                        <span id='stack-span'>Technologies:</span> React.JS, Express.JS, Bootstrap, Firestore, MongoDB, 
                        IndexedDB, Git, GitHub, GCP, Netlify, Vercel, Blockchain, Cryptocurrency.
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Background;