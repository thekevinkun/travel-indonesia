import "./header.css";

import { useState } from "react";

import { Nav } from "../../components";

import { MdMenu } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header hero__padding">
        <div className="header__logo">
            <GiPalmTree className="logo-icon"/>
            <span className="logo-name">PacoTravel</span>
        </div>

        <MdMenu
            className="menu-icon" 
            onClick={() => setToggleMenu(true)}
        />
        
        {toggleMenu &&
            <Nav setToggleMenu={setToggleMenu}/>
        }
    </header>
  )
}

export default Header;