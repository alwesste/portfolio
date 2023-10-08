import './Navbar.scss';
import logo from "../../assets/logo/logo-removebg-preview.png"

const Navbar: React.FC = () => {
 
  return (
    <>
      <ul className ='navbar'>
       
      <img className='navbar-logo' src={logo} alt="logo of owner" />
        <li><a className='navbar-list' href="#about">About</a></li>
        <li><a className='navbar-list' href="#my-works">My Works</a></li>
        <li><a className='navbar-list' href="#contact">Contact</a></li>
        <li><a className='navbar-list' href="#competences">Skill</a></li>
        <li><a className='navbar-list' href="#CV">Resume</a></li>
      </ul>
    
    </>
  );
};

export default Navbar;
