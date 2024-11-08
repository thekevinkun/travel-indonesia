import "./header.css";

import { useState } from "react";

import { Nav } from "../../components";

import { MdMenu } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header id="home" className="header">
      <div className="header__top hero__padding">  
        <div className="header-logo">
            <GiPalmTree className="logo-icon"/>
            <span className="logo-name">Travel Indonesia</span>
        </div>

        <MdMenu
          className="menu-icon" 
          onClick={() => setToggleMenu(true)}
        />
      </div>

      <div className="header__social-media hero__padding">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/thekevinkun" target="_blank" rel="noreferrer">
          <CiInstagram />
        </a>
        <a href="https://twitter.com/thekevinkun" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </div>

      <Nav 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />

      <div className={`overlay-body ${toggleMenu ? "visible" : ""}`}></div>
    </header>
  )
}

export default Header;