import React, { useState, useRef, useEffect } from "react";
import "../../style/homeFaq.css";
import { faqs } from "../../assets/data/faqs";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Titre from "../../components/ensemble/titre/Titre";
import { NavLink } from "react-router-dom";

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Aucun élément n'est ouvert initialement
  const contentRefs = useRef(Array(faqs.length).fill(null)); // Références pour tous les éléments

  // Ouvrir le premier élément FAQ automatiquement lors du chargement initial
  useEffect(() => {
    setOpenIndex(0);
  }, []);

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
      contentRef.style.maxHeight = index === openIndex ? "0px" : `${contentRef.scrollHeight}px`; // Ajustement de la hauteur selon l'état
    }
  };

  return (
    <div className="HomeFaq">
      <div className="container">
        <Titre titre="FAQ - Questions Fréquemment Posées" />
        <ul style={{ marginTop: "38px" }} data-aos="fade-up">
          {faqs.slice(0, 4).map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-header" onClick={() => toggleAccordion(index)}>
                <h4 className="faq-question">{item.question}</h4>
                <div className={`faq-toggle ${index === openIndex ? "open" : ""}`}>
                  {index === openIndex ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {/* Conditionally render the content based on openIndex */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`faq-content ${index === openIndex ? "open" : "closed"}`}
              >
                <hr />
                <p className="faq-text">{item.content}</p>
              </div>
            </div>
          ))}
        </ul>

        <div className="btn">
          <button  data-aos="fade-up">
            <NavLink to={"/FAQ"}>Voir tous les FAQ</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
