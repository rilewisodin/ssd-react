import LogIn from "./LogIn";

function Header({ title = "Awesome App" }) {
  const user = null;

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

export default Header;
