import './Navbar.scss';
import logo from "../../assets/logo/logo-removebg-preview.png"

const Navbar: React.FC = () => {
 
  return (
    <>
      <ul className ='navbar'>
       
        <div className='navbar-logoConteiner'>
          <img className='navbar-logo' src={logo} alt="logo of owner" />
        </div>

        <div className='navbar-listConteiner'>
          <li><a className='navbar-list' href="#about">About</a></li>
          <li><a className='navbar-list' href="#my-works">My Works</a></li>
          <li><a className='navbar-list' href="#contact">Contact</a></li>
          <li><a className='navbar-list' href="#competences">Skill</a></li>
          <li><a className='navbar-list' href="#CV">Resume</a></li>
        </div>
      
        
      </ul>
    
    </>
  );
};

export default Navbar;
