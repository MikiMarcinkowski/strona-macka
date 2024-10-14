import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={css.menuContainer}>
      {/* Hamburger Icon or Cross Icon */}
      <div
        className={css.hamburgerIcon}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="menu"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && toggleMenu()}
      >
        {isMenuOpen ? "✖" : "☰"}{" "}
        {/* Cross icon when open, hamburger when closed */}
      </div>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`${css.menu} ${isMenuOpen ? css.show : ""}`}
        id="menu"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          O mnie
        </NavLink>
        <NavLink
          to="/offer"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Zabiegi
        </NavLink>
        <NavLink
          to="/first-consultation"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Pierwsza wizyta
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
}

export default Menu;
