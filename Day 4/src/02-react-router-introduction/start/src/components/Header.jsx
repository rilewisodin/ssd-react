// Header

import Nav from './Nav';
import { appTitle } from '../globals/globals';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">{appTitle}</Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
