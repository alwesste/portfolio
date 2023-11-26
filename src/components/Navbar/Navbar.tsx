import './Navbar.scss';
import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeContext.tsx';

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ul className={`listContainer ${isMenuOpen ? 'active' : ''} ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleMenu}>
          <li><a className='list' href="#about">A propos</a></li>
          <li><a className='list' href="#my-works">Mes travaux</a></li>
          <li><a className='list' href="#competences">Mes competences</a></li>
          <li><a className='list' href="#resume">Mon CV</a></li>            
          <li><a className='list' href="#contact">Contact</a></li>          
   
          <div onClick={toggleTheme} className={`lightMode ${isDarkMode ? 'lightdark-mode' : ''}`}>
            {isDarkMode ? <i className="fa-regular fa-lightbulb"></i> : <i className="fa-regular fa-moon"></i>}
          </div>   
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
