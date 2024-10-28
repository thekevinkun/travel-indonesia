import "./header.css";

import { Nav } from "../../components";
import { Hero } from "../../sections";


const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Hero />
    </header>
  )
}

export default Header;