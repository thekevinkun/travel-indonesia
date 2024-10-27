import "./hero.css";

import { data } from "../../constants";
import { Button, EmblaCarousel } from "../../components";

import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";

const getImage = () => {
  return data.destinations.map((item) => (
    <div key={item.title}className="embla__slide">
      <div 
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${item.image})`,
        }} 
        className="embla__slide__number"
      >
        <div className="hero-overlay"></div>

        <div className="hero__destination hero__padding">
          <div className="destination">
            <div className="location">
              <TfiLocationPin className="location-icon"/>
              <p className="name">{item.location}</p>
            </div>

            <h1 className="title">{item.title}</h1>

            <p className="description">{item.description}</p>

            <Button 
              type="button"
              title="Find Out More"
              variant="btn-yellow"
            />
          </div>

          <div className="social-media">
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
          </div>
        </div>
      </div>
    </div>
  ))
}

const Hero = () => {
  return (
    <section className="hero">
      <EmblaCarousel getSlides={getImage()}/>
    </section>
  )
}

export default Hero;