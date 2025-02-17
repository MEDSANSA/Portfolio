import React from 'react';

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="#hero" className="logo d-flex align-items-center">
                    <h1 className="sitename">Portfolio</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>
    );
};

export default Header;