import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./EmblaCarouselBlogArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./emblaBlog.css";

const OPTIONS = {};

const EmblaCarouselBlog = ({getSlides}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla-blog">
      <div className="embla-blog__viewport" ref={emblaRef}>
        <div className="embla-blog__container">
            {getSlides}
        </div>
      </div>

      <div className="embla-blog__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  )
}

export default EmblaCarouselBlog;
