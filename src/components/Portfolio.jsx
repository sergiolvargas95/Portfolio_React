import React from 'react';
import Project1 from '../assets/static/portfolio-1.png';
import Project2 from '../assets/static/portfolio-2.png';
import Project3 from '../assets/static/portfolio-3.png';

import '../assets/style/components/Portfolio.scss';

const Portfolio = () => (
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

export default Portfolio;
