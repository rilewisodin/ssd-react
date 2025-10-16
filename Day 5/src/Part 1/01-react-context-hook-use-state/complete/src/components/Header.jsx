import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import LogIn from './LogIn';
import PropTypes from 'prop-types';

function Header({ title = 'Awesome App' }) {
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
