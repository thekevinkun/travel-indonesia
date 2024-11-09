import "./emblaBlog.css";

import { motion } from "framer-motion";

import { animation } from "../../constants";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./EmblaCarouselBlogArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

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

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animation.slideInFromRight(0.5)}
        className="embla-blog__buttons"
      >
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </motion.div>
    </section>
  )
}

export default EmblaCarouselBlog;
