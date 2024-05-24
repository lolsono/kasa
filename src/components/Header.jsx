import { Logo } from "./Logo.jsx";

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <a className="link-acceuil" href="#">
          ACCUEIL
        </a>
        <a href="#">A PROPOS</a>
      </nav>
    </header>
  );
}

export default Header;
