import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <div>
        <nav className='navbar'>
          <span className='navbar-toggle' id='js-navbar-toggle'>
            <i className='fas fa-bars' />
          </span>
          <ul className='main-nav' id='js-menu'>
            <li>
              <Link className='nav-links' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-links' to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className='nav-links' to='/services'>
                Services
              </Link>
            </li>
            <li>
              <Link className='nav-links' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className='nav-links' to='/personal'>
                Personal
              </Link>
            </li>
            <li>
              <Link className='nav-links' to='/resumecv'>
                Resume/CV
              </Link>
            </li>
            <li>
              <Link className='nav-links' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Nav;