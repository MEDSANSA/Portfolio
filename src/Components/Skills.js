import React, { useState } from 'react';

const Skills = () => {
    const skills = [
        { name: 'C', icon: 'https://cdn.worldvectorlogo.com/logos/c-1.svg' },
        { name: 'C++', icon: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
        { name: 'C#', icon: 'https://cdn.worldvectorlogo.com/logos/c--4.svg' },
        { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java.svg' },
        { name: 'PHP', icon: 'https://www.vectorlogo.zone/logos/php/php-ar21.svg' },
        { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
        { name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
        { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Nest.js', icon: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg' },
        { name: 'Angular', icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg' },
        { name: 'Symfony', icon: 'https://cdn.worldvectorlogo.com/logos/symfony.svg' },
        { name: '.Net', icon: 'https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg' },
        { name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' },
        { name: 'Flask', icon: 'https://cdn.worldvectorlogo.com/logos/flask.svg' },
        { name: 'Ansible', icon: 'https://cdn.worldvectorlogo.com/logos/ansible.svg' },
        { name: 'Terraform', icon: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
        { name: 'Oracle', icon: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
        { name: 'SQL & PL/SQL', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg' },
        { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
        { name: 'Github', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
        { name: 'Linux', icon: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg' },
        { name: 'Arduino', icon: 'https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg' },
        { name: 'Power BI', icon: 'https://www.svgrepo.com/show/473761/powerbi.svg' },
        { name: 'SQL server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
        { name: 'Qt', icon: 'https://www.vectorlogo.zone/logos/qtio/qtio-ar21.svg' },
        { name: 'Adobe', icon: 'https://www.svgrepo.com/show/452142/adobe.svg' }
    ];

    const [showAll, setShowAll] = useState(false);

    return (
        <section id="skills" className="interests section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Skills</h2>
                <div><span className="description-title">My Skills</span></div>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {(showAll ? skills : skills.slice(0, 8)).map((skill, index) => (
                        <div key={index} className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="features-item">
                                <img src={skill.icon} alt={skill.name} className="me-2" style={{ width: '24px', height: '24px' }} />
                                <h3><a href="##" className="stretched-link">{skill.name}</a></h3>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="features-item show-more-btn" onClick={() => setShowAll(!showAll)} >
                            <h3>
                                <img 
                                    src={showAll 
                                        ? "https://www.svgrepo.com/show/498205/minus.svg"
                                        : "https://www.svgrepo.com/show/388311/plus.svg"
                                    } 
                                    className="me-2" 
                                    style={{ width: '24px', height: '24px' }} 
                                    alt="show" 
                                />
                                <a href="##" className="stretched-link">{showAll ? "Show Less" : "Show More"}</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
