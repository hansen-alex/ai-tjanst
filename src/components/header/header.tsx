import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>Musicoach</h1>
      </Link>
      <ul>
        <li>
          <Link to="/coach">AI Coach</Link>
        </li>
        <li>
          <Link to="/step-by-step">Step by step</Link>
        </li>
        <li>
          <Link to="/gear">Gear</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
