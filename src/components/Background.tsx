import React from "react";
require('../styles/background.css');

const Background = (): any => {
    return (
        <section id='background-and-stack'>
            <div id='background-container'>
                <h1 className="bg-stack-title">Background</h1>
                <p className='large-p' id='background'>
                    I am a full-stack developer specializing in JavaScript, TypeScript, and Solidity, with expertise in building
                    scalable Web2 and Web3 applications. I develop modern, high-performance solutions using React.js, Next.js,
                    Express.js, Ethers.js, PostgreSQL, and other cutting-edge technologies.<br /><br />
                    With a deep understanding of blockchain technology and the cryptocurrency ecosystem, I design and deploy
                    smart contracts for Ethereum and EVM compatible chains. Passionate about solving real-world problems through
                    innovation, I focus on delivering seamless user experiences backed by robust backend architecture.<br /><br />
                    I thrive in collaborative environments, bringing strong problem-solving skills, adaptability, and a
                    commitment to continuous learning. Always eager to push the boundaries of technology, I look forward to
                    contributing to forward-thinking projects and driving impactful digital solutions.
                </p>
            </div>
            <div id='stack-container'>
                <h1 className="bg-stack-title">Programming Stack</h1>
                <ol className='large-p' style={{ listStyle: 'none', marginLeft: '0px', paddingLeft: '0px' }}>
                    <li>
                        <span id='lang-span'>Languages:</span> Javascript, Typescript, Solidity, HTML5, CSS.
                    </li>
                    <li>
                        <span id='stack-span'>Technologies, Tools, & Platforms:</span> React.js, Next.js, Express.js, React Native, Web3-React, Foundryup, Ethers.js, Tailwind CSS, Firestore, MongoDB,
                        PostgrSQL, IndexedDB, Git and GitHub, Trello, GCP, Namecheap, Vercel, Blockchain, Cryptocurrency, WordPress.
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Background;
