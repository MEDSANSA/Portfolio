import React from 'react';


const Hero = () => {
    return (
        <section id="hero" className="hero section dark-background">
            <div className="container">
                <h2>Med Aziz Sansa</h2>
                <p>
                    I am a  <span className="typed" data-typed-items="Computer Engineer">Business Intelligence Engineering Student</span>
                    <span className="typed-cursor typed-cursor--blink"></span>
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/med-aziz-sansa/" target="linkedin" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/MEDSANSA" target="github" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="mailto:azizsansa4@gmail.com">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>
            </div>
            <img src="./img/avatar.png" alt="Profile" className="hero-image" data-aos="fade-in" />
        </section>

    );
};

export default Hero;
