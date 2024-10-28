import "./nav.css";

const Nav = ({toggleMenu, setToggleMenu}) => {
  return (
    <nav className={`glassmorphism-menu nav ${toggleMenu ? "visible" : ""}`}>
      <ul className={`nav__list ${toggleMenu ? "visible" : ""}`}>
        <li 
          className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
          onClick={() => setToggleMenu(false)}
        >
          <a href="#home">Home</a>
        </li>
        <li 
          className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
          onClick={() => setToggleMenu(false)}
        >
          <a href="#about">About Us</a>
        </li>
        <li 
          className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
          onClick={() => setToggleMenu(false)}
        >
          <a href="#services">Services</a>
        </li>
        <li 
          className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
          onClick={() => setToggleMenu(false)}
        >
          <a href="#products">Products</a>
        </li>
        <li 
          className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
          onClick={() => setToggleMenu(false)}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div 
        className={`nav__close ${toggleMenu ? "visible" : ""}`}
        onClick={() => setToggleMenu(false)}
      ></div>
    </nav>
  )
}

export default Nav;