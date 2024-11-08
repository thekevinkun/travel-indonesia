import "./hero.css";
import "../../components/EmblaHero/emblaHero.css";

import { data } from "../../constants";
import { Button, EmblaCarouselHero } from "../../components";

import { TfiLocationPin } from "react-icons/tfi";

const getImage = () => {
  return data.destinations.map((item) => (
    <div key={item.title}className="embla-hero__slide">
      <div 
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${item.image})`
        }} 
        className="embla-hero__slide__number"
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
              variant="btn-red"
            />
          </div>
        </div>
      </div>
    </div>
  ))
}

const Hero = () => {
  return (
    <section className="hero">
      <EmblaCarouselHero getSlides={getImage()}/>
    </section>
  )
}

export default Hero;