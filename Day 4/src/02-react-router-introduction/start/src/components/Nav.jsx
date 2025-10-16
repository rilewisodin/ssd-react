// Nav
import { NavLink } from 'react-router-dom';

const Nav = () => {
  // These need to be updated to use NavLink instead of anchor tags

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
