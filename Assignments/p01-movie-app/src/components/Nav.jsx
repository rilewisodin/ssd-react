import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ handleShowHideNav }) => {
  function closeNav(e) {
    if (window.innerWidth < 600) {
      handleShowHideNav();
    } else {
      e.target.blur();
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
          <NavLink to="/favourite-list">Favourite List</NavLink>
        </li>
        <li>
          <NavLink to="/watch-list">Watch List</NavLink>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  handleShowHideNav: PropTypes.func.isRequired,
}

export default Nav;
