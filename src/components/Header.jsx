import React, { useState, useRef } from "react";
// import "./styles/_Header.scss";
import logo from "../assets/img/netflix.svg";
import profile from "../assets/img/profile.jpg";

const Header = () => {
  const [navColor, setNavColor] = useState(false);
  const headerRef = useRef();
  window.addEventListener("scroll", (e) => {
    let scrollValue = window.scrollY;
    if (scrollValue > 25) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  });
  return (
    <header className={navColor ? "active" : ""}>
      <div className="main-navigation">
        <picture className="logo-container">
          <img src={logo} alt="Logo del sitio web Netflix" />
        </picture>
        <nav className="main-navigation__container">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
            <li>
              <a href="#">Películas</a>
            </li>
            <li>
              <a href="#">Novedades populares</a>
            </li>
            <li>
              <a href="#">Mi lista</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="account-navigation">
        <ul>
          <li>
            <i className="material-icons">search</i>
          </li>
          <li>
            <i className="material-icons">redeem</i>
          </li>
          <li>
            <i className="material-icons">notifications</i>
          </li>
          <li className="profile-details">
            <a href="#">
              <img src={profile} alt="Profile of user" />
            </a>
            <i className="material-icons">arrow_drop_down</i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
