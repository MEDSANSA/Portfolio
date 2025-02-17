import React from 'react';

const Resume = () => {
    return (
        <section id="resume" class="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <div><span className="description-title">My Resume</span></div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                            <h4>Engineering diploma in computer science</h4>
                            <h5>2021 - 2026</h5>
                            <p><em>ESPRIT</em></p>
                        </div>
                        <div class="resume-item">
                            <h4>Baccalaureate diploma in computer science</h4>
                            <h5>2020 - 2021</h5>
                            <p><em>hight school farhat hached rades</em></p>
                        </div>

                        <h3 class="resume-title">Certifications</h3>
                        <div class="resume-item pb-0">
                            <ul>
                                <li><b>Fundamentals of Deep Learning</b>, NVIDIA</li>
                                <li><b>Complete JavaScript, jQuery and React Bootcamp</b>, Udemy</li>
                                <li><b>CCNA: Switching, Routing, and Wireless Essentials</b>, Cisco</li>
                            </ul>
                        </div>

                        <h3 class="resume-title">Projects</h3>
                        <p><em>Check out my projects on GitHub, where I share my coding work and contributions.</em></p>
                        <div class="resume-item pb-0">
                            <ul>
                                <li><a href="https://github.com/MEDSANSA/Machine-Learning-Deploy">Machine learning models Deployment <i class="bi bi-github"></i></a></li>
                                <li><a href="https://github.com/MEDSANSA/Espritify_web">Projet d’integration: Application web et desktop <i class="bi bi-github"></i></a></li>
                                <li><a href="https://github.com/OussemaDv/Smart_Coworking_Space_2A39/tree/master">Application desktop <i class="bi bi-github"></i></a></li>
                                <li><a href="https://github.com/OussemaDv/Projet-1A">Jeux video 2D <i class="bi bi-github"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 class="resume-title">Internships</h3>

                        <div class="resume-item">
                            <h4>DevOps intern</h4>
                            <h5>juil - août 2024</h5>
                            <p><em>Sofrecom</em></p>
                            <ul>
                                <li>Design and implementation of an automated cloud infrastructure on Flexible Engine.</li>
                                <li>Deployment of virtual machines, networks and EVS volumes, with orchestration of configurations via Ansible playbooks for a high-performance and reliable infrastructure.</li>
                            </ul>
                        </div>

                        <div class="resume-item">
                            <h4>Web developer</h4>
                            <h5>août 2023</h5>
                            <p><em>TANIT WEB</em></p>
                            <ul>
                                <li>Design of the modern and user-friendly CongéFlow web application for leave management, implementing advanced automation based on Camunda to optimize the leave request and approval process.</li>
                            </ul>
                        </div>

                        <div class="resume-item">
                            <h4>Web developer</h4>
                            <h5>juin 2022</h5>
                            <p><em>TUNISAIR</em></p>
                            <ul>
                                <li>I contributed to the development of a web application dedicated to employee management within Tunisair.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default Resume;
