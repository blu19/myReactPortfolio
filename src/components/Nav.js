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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/personal'>Personal</Link>
            </li>
            <li>
              <Link to='/resumecv'>Resume/CV</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Nav;