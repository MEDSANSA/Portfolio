import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container">
                <h3 className="sitename">Portfolio</h3>
                <p>Feel free to reach out – let's connect and collaborate!</p>
                <div className="social-links d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/med-aziz-sansa/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/MEDSANSA" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="mailto:azizsansa4@gmail.com">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>
                <div className="container">
                    <div className="copyright">
                    <span>Made with 💻 & ☕ by Med Aziz Sansa © {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
