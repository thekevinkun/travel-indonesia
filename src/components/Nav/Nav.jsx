import "./nav.css";

const Nav = ({toggleMenu, setToggleMenu}) => {
  return (
    <div className={`nav-container ${toggleMenu ? "visible" : ""}`}>
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
            <a href="#events">Upcoming Events</a>
          </li>
          <li 
            className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#moments">Watch Moments</a>
          </li>
          <li 
            className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#faq">FAQ</a>
          </li>
          <li 
            className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#blog">Blog</a>
          </li>
          <li 
            className={`nav__list-item ${toggleMenu ? "visible" : ""}`}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div 
        className={`nav__close ${toggleMenu ? "visible" : ""}`}
        onClick={() => setToggleMenu(false)}
      ></div>
    </div>
  )
}

export default Nav;