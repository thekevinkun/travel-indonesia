import "./aboutUs.css";

import { Button } from "../../components";

import { images } from "../../constants";

const AboutUs = () => {
  return (
    <section id="about" className="section__padding">
      <div className="about">
        <div className="about__content">
          <h2>About Us</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          <Button 
            type="button"
            title="More"
            variant="btn-yellow"
          />
        </div>

        <div className="about__image">
          <div className="about__image-1">
            <img src={images.aboutUsImg1} alt="About Us"/>
          </div> 

          <div className="about__image-2">
            <img src={images.aboutUsImg2} alt="About Us"/>
          </div>
        </div>
      </div>

      <div className="about__small-screen">
        <h2>About Us</h2>

        <div className="about__image">
          <div className="about__image-1">
            <img src={images.aboutUsImg1} alt="About Us"/>
          </div> 

          <div className="about__image-2">
            <img src={images.aboutUsImg2} alt="About Us"/>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>

        <Button 
          type="button"
          title="More"
          variant="btn-yellow"
        />
      </div>
    </section>
  )
}

export default AboutUs;