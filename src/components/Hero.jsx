import React from 'react';
import '../assets/style/components/Hero.scss';
import imagen from '../assets/static/hero-image-home.jpg';

const Hero = () => (
    <div>
        <article className="Hero-image" style={{backgroundImage: `url(${imagen})`, backgroundAttachment:'fixed'}}>
            <aside className="Hero-image-opacity" >
                <div className="Hero-image-content" >
                    <h2 className="Hero-image-title" >
                        Welcome<br/> to my website
                    </h2>
                    <a href="#contacto" className="btn">CONTACT ME</a>
                </div>
            </aside>
        </article>
    </div>
)

export default Hero;
