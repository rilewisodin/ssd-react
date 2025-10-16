// Header
import PropTypes from 'prop-types';

const Header = ({ title = 'Awesome App' }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
