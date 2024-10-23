import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fd7a2f03c3ad531f41de6bb/1615487352542-1YBYPTENT89OF80VBK6J/ICON_Waste_Recycling.png"
            alt="Recycling Logo"
            className="logo"
          />

          {/* Mobile responsive menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          
          {/* Navbar menu */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/recyclables" className="nav-links" onClick={closeMobileMenu}>
                Recyclables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/compostables" className="nav-links" onClick={closeMobileMenu}>
                Compostables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/landfill" className="nav-links" onClick={closeMobileMenu}>
                Landfill
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
