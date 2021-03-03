import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderOpen, setHeaderOpen] = useState(true);
  const [isScrolled, setScrolled] = useState(false);

  const header = useRef();

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > header.current.offsetHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleHeader = () => {
    setHeaderOpen(!isHeaderOpen);

    isMenuOpen && setMenuOpen(false);
  };

  const toggleNavbarMenu = () => {
    setMenuOpen(!isMenuOpen);

    isHeaderOpen && setHeaderOpen(false);
  };

  useEffect(() => {
    // hide the navbar on keyup on Escape
    const handleCloseOnEscape = (e) => e.keyCode === 27 && setMenuOpen(false);

    const handleCloseNavbar = () => setMenuOpen(false);

    window.addEventListener("click", handleCloseNavbar);
    window.addEventListener("keyup", handleCloseOnEscape);

    return () => {
      window.removeEventListener("click", handleCloseNavbar);
      window.removeEventListener("keyup", handleCloseOnEscape);
    };
  });

  return (
    <>
      <header id="top" className={isScrolled ? "state-scrolled" : ""} ref={header}>
        <div className="inner-wrap">
          <div className="primary-segment">
            <Link to="/" className="logo">
              <img src={require("../../assets/img/logo.png")} alt="Logo" />
            </Link>
            <button
              type="button"
              className={isHeaderOpen ? "trigger-header state-active" : "trigger-header"}
              onClick={toggleHeader}
            >
              ?
            </button>
            <button
              type="button"
              aria-controls="menu-main"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Menu"
              id="trigger-menu-main"
              className={isMenuOpen ? "state-active" : ""}
              onClick={(e) => {
                e.stopPropagation();
                toggleNavbarMenu();
              }}
            >
              <span className="menu-label">мени</span>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <NavbarMenu isMenuOpen={isMenuOpen} />
        </div>
      </header>
      <Header isHeaderOpen={isHeaderOpen} toggleHeader={toggleHeader} />
    </>
  );
};

export default Navbar;
