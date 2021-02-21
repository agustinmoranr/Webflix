import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/img/netflix.svg";
import profile from "../assets/img/profile.jpg";

const sections = [
  "Mi lista",
  "Series japonesas",
  "Series escandinavias",
  "Películas colombianas",
  "Dramas socials de TV",
  "Películas alemanas",
  "Películas documentales",
  "Películas de terror",
  "Misterios para TV",
  "Películas infantiles y familiares",
  "Dramas coreanos basados en webcómics",
  "Wésterns",
  "Series de adolescentes",
  "Películas italianas",
  "Películas brasileñas",
  "Series de fantasía",
];
const Header = () => {
  const [navColor, setNavColor] = useState(false);
  const hamburgerBtnRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showSiteNav, setShowSiteNav] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(true);
  const [midMediaQuery, setMidMediaQuery] = useState({
    matches: window.innerWidth > 680 ? true : false,
  });
  const navRef = useRef();
  // const formSearchRef = useRef();
  const searchInputRef = useRef();
  // console.log(searchInputRef);
  const midRangeQuery = window.matchMedia(
    "(min-width: 680px) and (max-width: 1024px)"
  );
  midRangeQuery.addEventListener("change", handleMidRangeChange);
  // midRangeQuery.removeEventListener("change", handleMidRangeChange);
  function handleMidRangeChange(e) {
    //Hide the siteNav if the window is not between (min-width: 680px) and (max-width: 1024px)
    // console.log(e.matches);
    if (!e.matches) {
      setShowSiteNav(false);
    }
    return midRangeQuery.removeEventListener("change", handleMidRangeChange);
  }
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 680px)");
    mediaQuery.addEventListener("change", setMidMediaQuery);
    if (midMediaQuery.matches) setPlaceholderText(true);
    if (!midMediaQuery.matches) {
      setPlaceholderText(false);
      setShowSearch(false);
      setShowInput(false);
    }
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", setMidMediaQuery);
  }, [midMediaQuery]);

  window.addEventListener("scroll", (e) => {
    let scrollValue = window.scrollY;
    if (scrollValue > 25) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  });

  function handleHideMenu(e) {
    e.preventDefault();
    if (hamburgerBtnRef.current.style.marginLeft === "0px")
      return (hamburgerBtnRef.current.style.marginLeft = "-550px");
    hamburgerBtnRef.current.style.marginLeft = "0px";
  }
  function handleHideNav(e) {
    e.preventDefault();
    setShowSiteNav(!showSiteNav);
  }
  function handleSearch(e) {
    e.preventDefault();
    if (!showInput && searchInputRef.current) searchInputRef.current.focus();
    setShowSearch(!showSearch);
    setShowInput(!showInput);
  }
  return (
    <header className={navColor ? "active" : ""}>
      <div className="site-navigation">
        <div className="menu-wrapper">
          <button
            onClick={handleHideMenu}
            className="hamburger__btn material-icons"
          >
            menu
          </button>
          <picture className="logo-container">
            <img src={logo} alt="Logo del sitio web Netflix" />
          </picture>
        </div>
        <span onClick={handleHideNav} className="menu-wrapper-explore">
          <span>Explorar</span>
          <i className="material-icons">arrow_drop_down</i>
        </span>
        <nav
          ref={navRef}
          className={
            showSiteNav
              ? "site-navigation__items modal"
              : "site-navigation__items"
          }
        >
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Series</a>
            </li>
            <li>
              <a href="/">Películas</a>
            </li>
            <li>
              <a href="/">Novedades populares</a>
            </li>
            <li>
              <a href="/">Mi lista</a>
            </li>
          </ul>
        </nav>
      </div>

      <div ref={hamburgerBtnRef} className="hamburger">
        <nav className="hamburger__nav">
          <div className="hamburger__nav__profile">
            <picture>
              <img src={profile} alt="User profile" />
            </picture>
            <ul className="hamburger__nav__sections">
              <li>Cuenta</li>
              <li>Centro de ayuda</li>
              <li>Cerrar sesión en Netflix</li>
            </ul>
          </div>
          <ul className="hamburger__nav__sections">
            {sections.map((section, index) => (
              <li key={index}>{section}</li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className="account-navigation">
        <ul>
          <li>
            <form
              // ref={formSearchRef}
              className={showSearch ? "search show-search" : "search"}
            >
              <label
                onClick={handleSearch}
                htmlFor="searchInput"
                name="searchInput"
                className="material-icons"
              >
                search
              </label>
              <input
                ref={searchInputRef}
                id="searchInput"
                type="text"
                name="searchInput"
                className={showInput ? "show-input" : ""}
                placeholder={
                  placeholderText ? "Títulos, personas, géneros" : "Buscar"
                }
              />
            </form>
          </li>
          <li>
            <i className="material-icons">redeem</i>
          </li>
          <li>
            <i className="material-icons">notifications</i>
          </li>
          <li className="profile-details">
            <a href="/">
              <img src={profile} alt="User profile" />
            </a>
            <i className="material-icons">arrow_drop_down</i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
