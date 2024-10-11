// import React from "react";
import css from "./Footer.module.css"; // Importujemy moduł CSS jako 'css'
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
} from "react-icons/bi";

function Footer({phone, mail}) {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.contactInfo}>
          <p>Telefon: { phone}</p>
          <p>
            Email:{" "}
            <a href="mailto:contact@example.com" className={css.contactInfo}>
              {mail}
            </a>
          </p>
        </div>
        <div className={css.socialLinks}>
          <a
            href="https://www.facebook.com"
            className={css.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>{" "}
            {<BiLogoFacebookCircle /> /* Ikona Facebook */}
          </a>
          <a
            href="https://www.instagram.com"
            className={css.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>{" "}
            {<BiLogoInstagramAlt /> /* Ikona Instagram */}
          </a>
          
        </div>
      </div>
      <div className={css.copyright}>
        <p>&copy; {new Date().getFullYear()} Copyright by MARVI</p>
      </div>
    </footer>
  );
}

export default Footer;
