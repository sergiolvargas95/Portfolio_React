import React from 'react';
import { useState } from 'react';

import Modal from './Modal';

import Project1 from '../assets/static/portfolio-1.png';
import Project2 from '../assets/static/portfolio-2.png';
import Project3 from '../assets/static/portfolio-3.png';
import GitHubIcon from '../assets/static/github.svg';
import RedirectionIcon from '../assets/static/redirection-icon.svg';

import '../assets/style/components/Portfolio.scss';


const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    return (
    <div id="portafolio" className="portfolio section">
        <div className="container">
            <h2 className="section-title">My Portfolio</h2>
            <a href="#trabajo-1" className="portfolio-card">
                <img src={Project1} alt="Project 1" />
                <aside className="portfolio-card-info" >
                    <div>
                        <h3>Batatabit</h3>
                        <p>This is a website called Batabit, it is made from a figma wireframe; It is adaptable to any user device, it is created based on...</p>
                    </div>
                </aside>
            </a>

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h3>Batatabit</h3>
                <p>This is a website called Batatabit, it is made from a figma wireframe; It is adaptable to any user device, it is created based on the Mobile First standard.<br/><br/>
                    Through Javascript an API is consumed to obtain the prices of cryptocurrencies and a dark mode to give a better experience to users.
                </p>
                <aside>
                    <a href="https://github.com/sergiolvargas95/Batabit_Frontend" target="_black" rel="noopener"><img className="github-icon" src={GitHubIcon} alt="github-icon"/></a>
                    <a href="https://sergiolvargas95.github.io/Batabit_Frontend/" target="_black" rel="noopener"><img  className="redirection-icon" src={RedirectionIcon} alt="redirection-icon" /></a>
                </aside>
            </Modal>
            <a href="#trabajo-2" className="portfolio-card">
                <img src={Project2} alt="Project 2" />
                <aside className="portfolio-card-info" >
                    <div>
                        <h3>Batatabit</h3>
                        <p>This is a website called Batabit, it is made from a figma wireframe; It is adaptable to any user device, it is created based on...</p>
                    </div>
                </aside>
            </a>
            <a href="#trabajo-1" className="portfolio-card">
                <img src={Project3} alt="Project 3" />
                <aside className="portfolio-card-info" >
                    <div>
                        <h3>Batatabit</h3>
                        <p>This is a website called Batabit, it is made from a figma wireframe; It is adaptable to any user device, it is created based on...</p>
                    </div>
                </aside>
            </a>
        </div>
    </div>
    )
}

export default Portfolio;
