import "./emblaHero.css";

import React from "react";
import { motion } from "framer-motion";

import { animation } from "../../constants";

import { DotButton, useDotButton } from "./EmblaCarouselHeroDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./EmblaCarouselHeroArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const OPTIONS = {};

const EmblaCarouselHero = ({getSlides}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla-hero">
      <div className="embla-hero__viewport" ref={emblaRef}>
        <div className="embla-hero__container">
            {getSlides}
        </div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        className="embla-hero__controls"
      >
        <motion.div 
          variants={animation.slideInFromRight(0.5)} 
          className="embla-hero__buttons"
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </motion.div>

        <motion.div 
          variants={animation.slideInFromRight(0.5)} 
          className="embla-hero__dots"
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla-hero__dot".concat(
                index === selectedIndex ? " embla-hero__dot--selected" : ""
              )}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EmblaCarouselHero;
