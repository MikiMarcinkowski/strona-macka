import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Menu.module.css"; 

function Menu() {
  const [isOfferOpen, setOfferOpen] = useState(false);

  const toggleOfferMenu = () => {
    setOfferOpen(!isOfferOpen);
  };

  return (
    <nav className={css.menu}>
      <Link to="/" className={css.menuItem}>
        Home
      </Link>
      <Link to="/about-me" className={css.menuItem}>
        O mnie
      </Link>
      <div className={css.menuItem} onClick={toggleOfferMenu}>
        Oferta
        <div className={`${css.submenu} ${isOfferOpen ? css.show : ""}`}>
          <Link to="/offer#pijawki" className={css.submenuItem}>
            Pijawki
          </Link>
          <Link to="/offer#igły" className={css.submenuItem}>
            Igły
          </Link>
          <Link to="/offer#masaż" className={css.submenuItem}>
            Masaż
          </Link>
          <Link to="/offer#fizjoterapia" className={css.submenuItem}>
            Fizjoterapia
          </Link>
        </div>
      </div>
      <Link to="/first-consultation" className={css.menuItem}>
        Pierwsza Konsultacja
      </Link>
      <Link to="/contact" className={css.menuItem}>
        Kontakt
      </Link>
    </nav>
  );
}

export default Menu;
