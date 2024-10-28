import "./nav.css";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";


const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <nav className="nav hero__padding">  
        <div className="nav__logo">
              <GiPalmTree className="logo-icon"/>
              <span className="logo-name">PacoTravel</span>
        </div>

        <MdMenu
          className="menu-icon" 
          onClick={() => setToggleMenu(true)}
        />
      </nav>

      <div className={`glassmorphism-menu nav-menu ${toggleMenu ? "visible" : ""}`}>
        <ul className={`nav-menu__list ${toggleMenu ? "visible" : ""}`}>
          <li 
            className={`nav-menu__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#home">Home</a>
          </li>
          <li 
            className={`nav-menu__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#about">About Us</a>
          </li>
          <li 
            className={`nav-menu__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#services">Services</a>
          </li>
          <li 
            className={`nav-menu__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#products">Products</a>
          </li>
          <li 
            className={`nav-menu__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div 
          className={`nav-menu__close ${toggleMenu ? "visible" : ""}`}
          onClick={() => setToggleMenu(false)}
        ></div>
      </div>

      <div className={`overlay-body ${toggleMenu ? "visible" : ""}`}></div>
    </>
  )
}

export default Nav;