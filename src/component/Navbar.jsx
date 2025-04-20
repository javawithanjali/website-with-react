import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <div>
      <header className='header-contant'>
        <ul className='header-heading'>
          <img className="logo-header" src={logo} alt="Logo" />
          <li><Link to="/login">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
