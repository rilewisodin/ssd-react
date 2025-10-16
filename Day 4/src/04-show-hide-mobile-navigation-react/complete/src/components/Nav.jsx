import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ handleShowHideNav }) => {
  function closeNav() {
    if (window.innerWidth < 600) {
      handleShowHideNav();
    }
  }

  return (
    <nav className="main-nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  handleShowHideNav: PropTypes.func.isRequired,
};

export default Nav;
