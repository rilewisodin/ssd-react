import PorpTypes from 'prop-types';

function Header({ title = 'React App' }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PorpTypes.string,
};

export default Header;
