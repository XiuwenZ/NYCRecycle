import React from 'react';


const Navbar = () => {
    return (
      <nav className="navbar">
         <img 
            src="https://images.squarespace-cdn.com/content/v1/5fd7a2f03c3ad531f41de6bb/1615487352542-1YBYPTENT89OF80VBK6J/ICON_Waste_Recycling.png" 
            alt="Recycling Logo" 
            className="logo" 
          />

        <ul className="nav-list">
            
          <li className="nav-item"><a href="#recyclables">Recyclables</a></li>
          <li className="nav-item"><a href="#compostables">Compostables</a></li>
          <li className="nav-item"><a href="#landfill">Landfill</a></li>
          <li className="nav-item"><a href="#hazardous">Hazardous Waste</a></li>
          <li className="nav-item"><a href="#electronics">Electronics</a></li>
        </ul>
      </nav>
    );
  };

export default Navbar;