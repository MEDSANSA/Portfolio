import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <div><span className="description-title">About Me</span></div>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 justify-content-center">

                    <div className="col-lg-8 content">
                        <h2>Business Intelligence student at ESPRIT</h2>
                        <p className="fst-italic py-3">

                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>30 November 2000</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 56 701 366</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tunis, Tunisia</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>med.sansa@esprit.tn</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            I am a second-year engineering cycle student with a passion for IT and technology.
                            Motivated and eagered to learn, I am always looking for new opportunities to improve my skills and take new challenges.
                            I adapt quickly and work well in different environments.
                            I am ready to apply my knowledge and contribute to innovative projects.
                        </p>
                        <div className="about-buttons">
                            <a href="./docs/Cv_Med_Aziz_Sansa.pdf" download className="btn btn-outline-primary" style={{Color: "#03a9f5" }}>
                                <i className="bi bi-file-earmark-text"></i> Download My CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
