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
      <ul className={`listConteiner ${isMenuOpen ? 'active' : ''} ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleMenu}>
          <li><a className='list' href="#about">About</a></li>
          <li><a className='list' href="#my-works">My Works</a></li>
          <li><a className='list' href="#competences">Skill</a></li>
          <li><a className='list' href="#contact">Contact</a></li>          
          <li><a className='list' href="#resume">Resume</a></li>     
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
