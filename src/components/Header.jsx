import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";

function Header() {
  return (
    <header>
      <h1>
        <Logo />
      </h1>
      <nav>
        <Link className="link-acceuil" to="/">
          ACCUEIL
        </Link>
        <Link to="/about">A PROPOS</Link>
      </nav>
    </header>
  );
}

export default Header;
