import "./nav.css";

import { MdOutlineClose } from "react-icons/md";

const Nav = ({setToggleMenu}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="home">Home</a>
        </li>
        <li className="nav__list-item">
          <a href="about">About Us</a>
        </li>
        <li className="nav__list-item">
          <a href="services">Services</a>
        </li>
        <li className="nav__list-item">
          <a href="products">Products</a>
        </li>
        <li className="nav__list-item">
          <a href="contact">Contact</a>
        </li>
      </ul>

      <div 
        className="nav__close-menu"
        onClick={() => setToggleMenu(false)}
      >
        <MdOutlineClose className="close-icon" />
      </div>
    </nav>
  )
}

export default Nav;