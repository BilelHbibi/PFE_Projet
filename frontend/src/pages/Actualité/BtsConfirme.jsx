import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img from "../../assets/images/BackForAll2.jpg";
import img2 from "../../assets/images/actualité/act2.jpg";
import img3 from "../../assets/images/actualité/act2(1).jpg";
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

const BtsConfirme = () => {
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
                <p>01 dec 2023</p>
              </div>
              <h3>
                LA BTS BANK CONFIRME LA SOLIDITÉ DE SES INDICATEURS FINANCIERS
              </h3>
              <p>
                L’activité semestrielle de la Banque a été marquée par une
                trajectoire évolutive faisant preuve de solidité de ses
                indicateurs financiers et de son engagement continu en matière
                de financement des jeunes promoteurs.En effet la banque a su
                dégager durant le 1er semestre de 2022 un bénéfice net de 4.7
                millions de dinars (MD), enregistrant une croissance de 16% par
                rapport au 1er semestre de 2021 . Son Produit Net Bancaire (PNB)
                s’est établi à 28 MDT contre 25.6 MDT à fin juin 2021, soit une
                croissance de 9.3%Le total bilan s’est établi à 1711.1 MDT ,
                enregistrant un bond de 61.6 MDT en 2022. L’encours de crédits
                sur la clientèle a atteint une enveloppe de 1359 MDT en 2022
                contre un montant de 1300.5 MDT en 2021, soit une croissance de
                4.5%. De même les Capitaux propres qui sont de l’ordre de 105
                MDT ont augmenté de 8.2% comparativement à la même période de
                2021.Coté financement, au cours des six premiers mois de 2022,
                la Banque a octroyé 6.700 crédits pour un coût total
                d’investissement de 122 MDT, enregistrant une croissance de 40%
                du nombre de crédits et de 27,5% du coût d’investissement par
                rapport à la même période de l’année précédente.La part des
                titulaires de diplômes supérieurs des financements s’est élevée
                à 50,2 MD, réalisant une augmentation de 42,6% par rapport à
                l’année précédente (35,2 MD en 2022).Quant aux financements
                octroyés aux femmes, le coût d’investissement alloué, a
                enregistré un montant d’environ 43 millions de dinars, réalisant
                une croissance de 42,3% par rapport à l’année précédente (29,8
                MD).Au cours de la même période, la Banque a également accordé 5
                000 crédits d’une valeur de 25 MDT au profit des
                très-petites-entreprises touchées par les répercussions de la
                pandémie du COVID-19 dans le cadre du programme spécifique «
                SOUTIEN TPE COVID LF2022 », co-organisé avec le Ministère de
                l’Emploi et de la Formation Professionnelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtsConfirme;
