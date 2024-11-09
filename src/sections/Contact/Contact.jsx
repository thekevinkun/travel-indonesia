import "./contact.css";

import { motion } from "framer-motion";

import { Button } from "../../components";

import { animation } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <div className="contact-overlay"></div>
        
        <div className="contact__content">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation.slideInFromBottom}
          >
            Contact
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation.slideInFromBottom}
            className="contact__content-information"
          >
            <div className="information-email">
              <p>Email:</p>
              
              <a href="#email">travelindonesia@gmail.com</a>
            </div>

            <div className="information-description">
              <p>
                We are happy to help you discover new interesting locations.
                Just leave your email and phone in the form below
              </p>
            </div>
          </motion.div>

          <div className="contact__content-form">
            <motion.input 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation.fadeIn(0.5)}
              type="text" 
              placeholder="Name" 
            />
            
            <motion.input 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation.fadeIn(0.5 * 1)}
              type="text" 
              placeholder="Email" 
            />
            
            <motion.input 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation.fadeIn(0.5 * 2)}
              type="text" 
              placeholder="Phone"
            />

            <motion.div
              style={{ width: "100%" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation.fadeIn(0.5 * 3)}
            >
              <Button 
                type="button"
                title="SEND"
                variant="btn-red"
              />
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default Contact;