import React from "react";
import css from "./Header.module.css"; 
import Logo from "../../assets/favicon/favicon-32x32.png";

function Header({phone, mail}) {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className={css.contactInfo}>
        <a href="mailto:contact@example.com" className={css.email}>
          {mail}
        </a>
        <span className={css.phone}>{ phone}</span>
      </div>
    </header>
  );
}

export default Header;
