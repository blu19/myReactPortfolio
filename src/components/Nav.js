import React from 'react';

function Nav() {
    return (
        <div>
            <nav className='navbar'>
            <span className='navbar-toggle' id='js-navbar-toggle'>
                <i className='fas fa-bars' />
            </span>
            <ul className='main-nav' id='js-menu'>
                <li>
                <a href='index.html' className='nav-links'>
                    Home
                </a>
                </li>
                <li>
                <a href='#about' className='nav-links'>
                    About
                </a>
                </li>
                <li>
                <a href='#services' className='nav-links'>
                    Services
                </a>
                </li>
                <li>
                <a href='#portfolio' className='nav-links'>
                    Portfolio
                </a>
                </li>
                <li>
                <a href='#personal' className='nav-links'>
                    Personal
                </a>
                </li>
                <li>
                <a
                    href='assets/misc/BrianUlatowski2020.pdf'
                    className='nav-links'
                >
                    Resume/CV
                </a>
                </li>
                <li>
                <a href='#contact' className='nav-links'>
                    Contact
                </a>
                </li>
            </ul>
            </nav>
        </div>
    );
}

export default Nav;