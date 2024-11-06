import "./faqItem.css";

import { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus  } from "react-icons/ai";

const FaqItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
        <div 
            className="question-box" 
            onClick={() => setIsOpen(!isOpen)}
        >
            <h3>{question}</h3>
            { isOpen ?
                <AiOutlineMinus className="close-question-icon"/>
            :
                <AiOutlinePlus className="open-question-icon"/>
            }
        </div>

        { isOpen &&
            <div className="answer-box">
                <p>{answer}</p>
            </div>
        }
    </div>
  )
}

export default FaqItem;