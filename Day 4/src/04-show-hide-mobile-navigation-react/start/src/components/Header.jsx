import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { appTitle } from '../globals/globals';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <header className={navOpen ? 'show' : ''}>
      <h1>
        <Link to="/">{appTitle}</Link>
      </h1>
      {/**
       * HTML for the Hamburger icon modified from HTMl
       * found at this codepen:
       * https://codepen.io/RRoberts/pen/ZBYaJr
       */}
      <button className="btn-main-nav" onClick={toggleNav}>
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <Nav toggleNav={toggleNav} />
    </header>
  );
};

export default Header;
