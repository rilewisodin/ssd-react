import LogIn from "./LogIn";

function Header({ title = "Awesome App" }) {
  const username = "Randy";

  return (
    <header>
      <h1>{title}</h1>
      <div className="user">
        {username !== null && <p>Hello, {username}!</p>}
        <LogIn />
      </div>
    </header>
  );
}

export default Header;
