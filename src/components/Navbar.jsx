import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Fonts.css";
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="./images/cyrosol-logo.png" alt="CYROSOL" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
                
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                WHY CYROSOL
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/careers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CAREERS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
