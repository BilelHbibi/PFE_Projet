import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img from "../../assets/images/BackForAll2.jpg";
import img2 from "../../assets/images/actualité/act6.png";
import img3 from "../../assets/images/actualité/act6(1).jpg";
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

const BtsInaugure = () => {
  return (
    <>
      <ScrollToTop />
      <BackForAll img={img} text="Actualités" />
      <div className="ActualitésId inaugure">
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
                <p>02 juil 2023</p>
              </div>
              <h3>
                LA BTS BANK INAUGURE UN CENTRE DE DEVELOPPEMENT DES COMPETENCES
              </h3>
              <p>
                La BTS Bank a inauguré le vendredi 2 juillet 2021 un centre de
                développement des compétences au sein de son siège social, nommé
                en l’honneur de feu « Al-Amin Al-Hafsawi », l’ex-Président
                Directeur Général de la Banque, en signe de gratitude et de
                reconnaissance pour ce qu’il a fourni à la Banque tout au long
                de son mandat.Par la même occasion la Banque a signé 4
                conventions avec l’Association Professionnelle Tunisienne des
                Banques et des Etablissements Financiers (APTBEF), L’«
                UNIVERSITE CENTRALE », le Centre de Formation « TFC » spécialisé
                dans les Langues et le Centre de formation « High Tech SQL »
                spécialisé dans les TIC.De même une cérémonie de remise des prix
                a été organisée à l’honneur de la meilleure agence et des
                meilleurs employés dans les domaines de l’étude et la
                réalisation des projets et du recouvrement des crédits pour
                l’année 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtsInaugure;
