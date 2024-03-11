import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img from "../../assets/images/BackForAll2.jpg";
import img2 from "../../assets/images/actualité/act4.png";
import img3 from "../../assets/images/actualité/act4(1).jpg";
import logo from "../../assets/images/actualité/logo.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const BtsConvention = () => {
  return (
    <>
      <ScrollToTop />
      <BackForAll img={img} text="Actualités" />
      <div className="ActualitésId">
        <div className="container">
          <Breadcrumbs />
          <div className="content">
            <div className="photo">
              <img src={img2} alt="" />
              <img src={logo} alt="" />
              <img src={img3} alt="" />
            </div>
            <div className="desc convention">
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>15 dec 2023</p>
              </div>
              <h3>
                SIGNATURE D’UNE CONVENTION DE PARTENARIAT INTITULÉE « PROGRAMME
                ISNAD” ENTRE LA BANQUE TUNISIENNE DE SOLIDARITÉ ET L’UNION DES
                TUNISIENS INDÉPENDANTS POUR LA LIBERTÉ (UTIL)
              </h3>
              <p>
                Une convention de partenariat a été signée, le vendredi 10
                septembre 2023, entre la Banque Tunisienne de Solidarité et
                l’Union des Tunisiens Indépendants pour la Liberté (UTIL),
                relative à la mise en oeuvre du « Programme Isnad ». Dans ce
                cadre, des contrats de financement ont été signés avec un
                certain nombre d’associations de micro-crédit (AMC) Ladite
                convention relative au « Programme Isnad », vise à financer une
                série de micro-projets dans des zones reculées et prioritaires,
                touchées par la pandémie de Corona, et ce via les associations
                de microcrédit. A cette occasion, le coup d’envoi du processus
                de financement a été donné aux petits promoteurs appartenant à
                plusieurs délégations des gouvernorats de Sidi Bouzid, Tataouine
                et Sousse, après une série de cycles de formations et d’études
                de projets faits en faveur des bénéficiaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtsConvention;
