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
      <ul className={`listConteiner ${isMenuOpen && 'active'}` } onClick={toggleMenu}>
          <li><a className='list' href="#about">About</a></li>
          <li><a className='list' href="#my-works">My Works</a></li>
          <li><a className='list' href="#competences">Skill</a></li>
          <li><a className='list' href="#contact">Contact</a></li>          
          <li><a className='list' href="#CV">Resume</a></li>   
            <button onClick={toggleTheme}>
                Changer en mode {isDarkMode ? "clair" : "sombre"}
            </button>     
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
