import React from 'react';
import ProfileImage from '../assets/static/profile_photo.png';

import '../assets/style/components/AboutMe.scss';

const AboutMe = () => (
    <div id="acerca" className="about section container full-lg-screen">
        <article className="text-lg-center information">
            <aside className="text-center principal-title">
                <h1>Sergio Vargas</h1>
                <h5>Frontend Developer</h5>
            </aside>
            <p className="text-center text-lg-right">Frontend developer and programming teacher who loves to implement designs that inspire and attract people.<br/><br/>
                I am also passionate about learning new things and being able to share them with anyone who has the same desire to learn. Programming and teaching how to do it is something I want to do all my life.
            </p>
            <div className="text-center">
                <a className="btn" href="../assets/static/Sergio vargas - Frontend Developer.pdf" target="_blank" rel="noopener">DOWNLOAD MY CV</a>
            </div>
        </article>
        <article className="profile-photo-container">
            <img className="profile-photo" src={ProfileImage} alt="profile photo" />
        </article>
    </div>
)

export default AboutMe;
