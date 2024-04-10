import React, { useState, useRef, useEffect } from "react";
import "../../style/homeFaq.css";
import { faqs } from "../../assets/data/faqs";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import BackForAll from "../../components/backAll/BackForAll";
import img from "../../assets/images/faqs.jpg";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import { useLocation } from "react-router-dom";

const AllFaqs = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Aucun élément n'est ouvert initialement
  const contentRefs = useRef(Array(faqs.length).fill(null)); // Références pour tous les éléments

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Si l'élément est déjà ouvert, le fermer ; sinon, l'ouvrir

    // Fermer les autres éléments si un élément est ouvert
    contentRefs.current.forEach((ref, i) => {
      if (ref && i !== index) {
        ref.style.maxHeight = "0px";
      }
    });

    const contentRef = contentRefs.current[index];
    if (contentRef) {
      contentRef.style.transition = "max-height 0.7s ease"; // Transition pour l'animation
      contentRef.style.maxHeight =
        index === openIndex ? "0px" : `${contentRef.scrollHeight}px`; // Ajustement de la hauteur selon l'état
    }
  };

  
  return (
    <>
      <BackForAll img={img} text="FAQ" />
      <div className="Faqs">
        <div className="container">
          <Breadcrumbs />
        </div>
        <ul>
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}  data-aos="fade-up">
              <div
                className="faq-header"
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="faq-question">{item.question}</h4>
                <div
                  className={`faq-toggle ${index === openIndex ? "open" : ""}`}
                >
                  {index === openIndex ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {/* Conditionally render the content based on openIndex */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`faq-content ${
                  index === openIndex ? "open" : "closed"
                }`}
              >
                <hr />
                <p className="faq-text">{item.content}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllFaqs;
