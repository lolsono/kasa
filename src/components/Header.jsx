import { Logo } from "./Logo.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Logo />
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
