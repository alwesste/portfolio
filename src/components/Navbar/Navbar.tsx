import './Navbar.scss';
import React, { useState } from 'react';

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <ul className={`listConteiner ${isMenuOpen && 'active'}` } onClick={toggleMenu}>
          <li><a className='list' href="#about">About</a></li>
          <li><a className='list' href="#my-works">My Works</a></li>
          <li><a className='list' href="#competences">Skill</a></li>
          <li><a className='list' href="#contact">Contact</a></li>          
          <li><a className='list' href="#CV">Resume</a></li>          
      </ul>

      <div className={`hamburger ${isMenuOpen && 'active' }`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      
    </>
  );
};

export default Navbar;
