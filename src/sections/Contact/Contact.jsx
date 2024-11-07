import { Button } from "../../components";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact-overlay"></div>
        
        <div className="contact__content">
          <h2>Contact</h2>

          <div className="contact__content-information">
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
          </div>

          <div className="contact__content-form">
            <input type="text" placeholder="Name" />
            
            <input type="text" placeholder="Email" />
            
            <input type="text" placeholder="Phone"/>

            <Button 
              type="button"
              title="SEND"
              variant="btn-red"
            />
          </div>
        </div>
    </section>
  )
}

export default Contact;