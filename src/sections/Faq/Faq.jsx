import "./faq.css";

import { motion } from "framer-motion";

import { FaqItem } from "../../components";

import { data, images, animation } from "../../constants";

import { TbLocationFilled } from "react-icons/tb";

const Faq = () => {
  return (
    <section id="faq" className="faq section__padding">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation.slideInFromLeft(0.5)}
          className="faq__image"
        >
          <img src={images.faqImg} alt="Faq background" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation.slideInFromBottom}
          className="faq__content"
        >
          <h2>FAQ</h2>

          <p className="faq__content-description">You can ask your question to a travel expert</p>

          <div className="faq__image-smallscreen">
            <img src={images.faqImg} alt="Faq background" />
          </div>

          <div className="faq__content-questions">
            { data.faq.map((item) => (
              <FaqItem 
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <div className="faq__content-ask">
            <TbLocationFilled className="ask-icon"/>
            <a href="#ask">ASK</a>
          </div>
        </motion.div>
    </section>
  )
}

export default Faq;