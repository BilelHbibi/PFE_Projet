import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img from "../../assets/images/BackForAll2.jpg";
import img2 from "../../assets/images/actualité/act1.jpg";
import img3 from "../../assets/images/BackForAll.jpg";
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

const BtsEntame = () => {
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
            <div className="desc">
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>30 Janv 2024</p>
              </div>
              <h3>
                La BTS BANK entame son programme de conversion de son réseau
                d’agences bancaires pour une nouvelle vocation commerciale.
              </h3>
              <p>
                Dans le cadre de sa stratégie 2021-2025 visant le développement
                et la transformation en une banque universelle, la BTS vient
                d’entamer le programme de conversion de ses cellules régionales
                en agences bancaires commerciales et ce afin de mieux répondre
                aux attentes de sa clientèle.En effet, le mois de juillet 2022 a
                été marqué par l’entrée en activité de 5 agences à savoir : Ben
                Arous, Manouba, Sousse, Sfax 1 et Sfax 2 . Le programme de
                conversion continuera durant les prochaines semaines pour les
                autres agences.Outre les produits de financements des projets,
                ce programme permettra de mettre à la disposition des clients de
                la Banque tous les autres services bancaires ( ouverture de
                compte, versements, retraits, virements et cartes bancaires… )
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtsEntame;
