import "./nav.css";

import { MdMenu } from "react-icons/md";

const Nav = () => {
  return (
    <aside className="sidebar">  
      <label
        style={{display: "flex"}} 
        for="menu-control"
      >
        <MdMenu
          className="menu-icon" 
        />
      </label>

      <input type="checkbox" id="menu-control" className="menu-control" />

      <nav className="nav glassmorphism-menu">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav__list-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li className="nav__list-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav__list-item">
            <a href="#products" className="nav-link">Products</a>
          </li>
          <li className="nav__list-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>

        <label for="menu-control" className="nav__close"></label>
      </nav>
    </aside>
  )
}

export default Nav;