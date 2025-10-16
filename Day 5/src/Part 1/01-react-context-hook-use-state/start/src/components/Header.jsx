import { useContext } from 'react';
import LogIn from './LogIn';
import { GlobalContext } from '../context/GlobalState';
import PropTypes from 'prop-types';

function Header({ title = 'Awesome App' }) {
  // in plain English, access a data warehouse (useContext)
  // specifically, access the one called GlobalContext
  const { user } = useContext(GlobalContext);

  return (
    <header>
      <h1>{title}</h1>
      <div className="user">
        {user !== null && <p>Hello, {user}!</p>}
        <LogIn />
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
