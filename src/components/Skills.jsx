import React from 'react';

import '../assets/style/components/Skills.scss';

import JavascriptLogo from '../assets/static/js-logo.png';
import ReactjsLogo from '../assets/static/react-logo.png';
import SassLogo from '../assets/static/sass-logo.png';
import WordpressLogo from '../assets/static/wordpress-logo.png';

const Skills = () => (
    <div id="habilidades" className="skills section">
        <h2>Managment of technologies such as</h2>
        <div className="skills-images">
            <div>
                <img src={JavascriptLogo} alt="Javascript Logo" />
                <p>Javascript</p>
            </div>
            <div>
                <img src={ReactjsLogo} alt="Reactjs Logo" />
                <p>React JS</p>
            </div>
            <div>
                <img src={SassLogo} alt="Sass Logo" />
                <p>Sass</p>
            </div>
            <div>
                <img src={WordpressLogo} alt="Wordpress Logo" />
                <p>Wordpress</p>
            </div>
        </div>
    </div>
)

export default Skills;
