import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import LogIn from "./LogIn";

function Header({ title = "Awesome App" }) {
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

export default Header;
