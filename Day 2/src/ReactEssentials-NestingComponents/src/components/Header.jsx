function Header({ title = 'React Essentials' }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// Header.defaultProps = {
//   title: 'React App',
// };

export default Header;
