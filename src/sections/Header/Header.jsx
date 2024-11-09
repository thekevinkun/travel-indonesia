import "./header.css";

import { useState } from "react";
import { motion } from "framer-motion";

import { Nav } from "../../components";
import { animation } from "../../constants";

import { MdMenu } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.header 
      id="home" 
      initial="hidden"
      animate="visible"
      className="header"
    >
      <motion.div 
        variants={animation.slideInFromTop} 
        className="header__top hero__padding"
      >  
        <div className="header-logo">
            <GiPalmTree className="logo-icon"/>
            <span className="logo-name">Travel Indonesia</span>
        </div>

        <MdMenu
          className="menu-icon" 
          onClick={() => setToggleMenu(true)}
        />
      </motion.div >

      <motion.div 
        variants={animation.slideInFromBottom} 
        className="header__social-media hero__padding"
      >
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
      </motion.div>

      <Nav 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />

      <div className={`overlay-body ${toggleMenu ? "visible" : ""}`}></div>
    </motion.header>
  )
}

export default Header;