import "./footer.css"

import { motion } from "framer-motion";

import { data, animation } from "../../constants";

import { GiPalmTree } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaReddit, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animation.slideInFromBottom}
        className="footer__padding"
      >
        <ul className="footer__content">
          <li className="footer__content-description">
            <h3 className="footer-title">
              <GiPalmTree className="logo-icon"/>
              Travel Indonesia
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>

          { data.footer.map((item) => (
            <li key={item.title} className="footer__content-list">
              <h4>{item.title}</h4>
              <ul className="content-list_link-list">
                {item.list.map((link) => (
                  <li key={link.title} className="link-item">
                    <a href={link.href} className="link">{link.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footer__contacts">
          <p>Follow Us</p>

          <ul className="social-media">
            <li className="social-media_item">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className="social-media_item">
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className="social-media_item">
              <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
                <FaReddit />
              </a>
            </li>
            <li className="social-media_item">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          © 2024 Kevinkun All rights reserver
        </div>
      </motion.div>  
    </footer>
  )
}

export default Footer;