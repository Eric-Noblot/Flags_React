import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo'

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>À propos</h1>
            <br />
            <p>Saut ca va ? j'apprends actuellement React avec From Scratch !   
            </p>
        </div>
    );
};

export default About;