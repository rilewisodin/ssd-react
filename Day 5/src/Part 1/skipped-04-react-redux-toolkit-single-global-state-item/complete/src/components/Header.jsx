import LogIn from "./LogIn";
import { useSelector } from "react-redux";

function Header({ title = "Awesome App" }) {
  const username = useSelector((state) => state.user.username);

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
