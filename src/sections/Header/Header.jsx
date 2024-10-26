import "./header.css";

import { Nav } from "../../components";

import { GiPalmTree } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header hero__padding">
        <div className="header__logo">
            <GiPalmTree className="logo-icon"/>
            <span className="logo-name">PacoTravel</span>
        </div>

        <Nav />
    </header>
  )
}

export default Header;