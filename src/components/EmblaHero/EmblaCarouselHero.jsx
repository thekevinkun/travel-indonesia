import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselHeroDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./EmblaCarouselHeroArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./emblaHero.css";

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

      <div className="embla-hero__controls">
        <div className="embla-hero__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla-hero__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla-hero__dot".concat(
                index === selectedIndex ? " embla-hero__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarouselHero;
