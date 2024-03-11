import React from "react";
import "../../../style/titre.css";

const Titre = (props) => {
  return (
    <div className="titre">
      <h2  data-aos="fade-up">
        {props.titre}
        <div className="over"></div>
      </h2>
    </div>
  );
};

export default Titre;
