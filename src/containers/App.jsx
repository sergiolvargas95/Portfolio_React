import React from 'react';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Protfolio from '../components/Portfolio';

import '../assets/style/App.scss';

const App = () => (
    <div>
        <Hero />
        <AboutMe />
        <Skills />
        <Protfolio />
    </div>
)

export default App;
