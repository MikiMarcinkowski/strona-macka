import React from "react";
import css from "./Header.module.css"; // Importujemy moduł CSS jako 'css'

function Header() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src="src/assets/android-chrome-192x192.png" alt="Logo" />
      </div>
      <div className={css.contactInfo}>
        <a href="mailto:contact@example.com" className={css.email}>
          contact@example.com
        </a>
        <span className={css.phone}>+48 123 456 789</span>
      </div>
    </header>
  );
}

export default Header;
