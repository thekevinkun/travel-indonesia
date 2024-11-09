import "./aboutUs.css";

import { motion } from "framer-motion";

import { Button } from "../../components";

import { images, animation } from "../../constants";

const AboutUs = () => {
  return (
    <section id="about" className="section__padding">
      <div className="about">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation.slideInFromLeft(0.5)}
          className="about__content"
        >
          <h2>ABOUT US</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          <Button 
            type="button"
            title="More"
            variant="btn-red"
          />
        </motion.div>

        <div className="about__image">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation.slideInFromBottom}
            className="about__image-1"
          >
            <img src={images.aboutUsImg1} alt="About Us"/>
          </motion.div> 

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation.slideInFromRight(0.5)}
            className="about__image-2"
          >
            <img src={images.aboutUsImg2} alt="About Us"/>
          </motion.div>
        </div>
      </div>

      <div className="about__small-screen">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation.slideInFromBottom}
        >
          About Us
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation.slideInFromRight(0.5)}
          className="about__image"
        >
          <div className="about__image-1">
            <img src={images.aboutUsImg1} alt="About Us"/>
          </div> 

          <div className="about__image-2">
            <img src={images.aboutUsImg2} alt="About Us"/>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation.slideInFromBottom}
          className="about__description"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          <Button 
            type="button"
            title="More"
            variant="btn-red"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs;