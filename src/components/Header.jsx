import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";

function Header() {
  function handleClick(event) {
    const links = document.querySelectorAll(".link-text");

    links.forEach((link) => {
      link.classList.remove("active");
    });

    event.target.classList.add("active");
  }

  return (
    <header>
      <h1>
        <Logo />
      </h1>
      <nav>
        <Link
          className="link-text link-acceuil"
          to="/"
          activeClassName="active"
          onClick={handleClick}
        >
          ACCUEIL
        </Link>
        <Link
          className="link-text link-about"
          to="/about"
          onClick={handleClick}
        >
          A PROPOS
        </Link>
      </nav>
    </header>
  );
}

export default Header;
