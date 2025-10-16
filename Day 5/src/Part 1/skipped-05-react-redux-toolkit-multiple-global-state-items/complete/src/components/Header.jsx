import LogIn from "./LogIn";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ title = "Awesome App", tagLine = null }) {
  const username = useSelector((state) => state.user.username);

  return (
    <header>
      <div className="app-title">
        <Link to="/">
          <h1>{title}</h1>
          {tagLine !== null && <h2>{tagLine}</h2>}
        </Link>
      </div>
      <div className="cart-icon-container">
        <CartIcon />
      </div>
      <div className="user">
        {username !== null && <p>Hello, {username}!</p>}
        <LogIn />
      </div>
    </header>
  );
}

export default Header;
