import React from 'react';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Protfolio from '../components/Portfolio';
import Contact from '../components/Contact';

import '../assets/style/App.scss';

const App = () => (
    <div>
        <Hero />
        <AboutMe />
        <Skills />
        <Protfolio />
        <Contact />
    </div>
)

export default App;
