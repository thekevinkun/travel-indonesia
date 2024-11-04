import "./header.css";

import { useState } from "react";

import { Nav } from "../../components";

import { MdMenu } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";

const Header = ({viewHeight}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      style={{height: viewHeight}}  
      className="header"
    >
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

      <Nav 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />

      <div className={`overlay-body ${toggleMenu ? "visible" : ""}`}></div>
    </header>
  )
}

export default Header;