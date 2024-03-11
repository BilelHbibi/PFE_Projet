import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import img from "../../assets/images/BackForAll2.jpg";
import { useEffect } from "react";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";

import img1 from "../../assets/images/actualité/act1.jpg";
import img2 from "../../assets/images/actualité/act3.jpg";
import img3 from "../../assets/images/actualité/act4(1).jpg";
import img4 from "../../assets/images/actualité/act2.jpg";
import img5 from "../../assets/images/actualité/act5.jpg";
import img6 from "../../assets/images/actualité/act6.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Actualité = () => {
  return (
    <>
      <ScrollToTop />
      <BackForAll img={img} text="Actualités" />
      <div className="actualite">
        <div className="container">
          <Breadcrumbs />
          <div className="actualiteImgleft">
            <div className="photo" data-aos="fade-right">
              <img src={img1} alt="" />
            </div>
            <div className="content" data-aos="fade-right">
              <h3>
                La Bts Bank entame son programme de conversion de son réseau
                d’agences
              </h3>
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>30 Janv 2024</p>
              </div>
              <p>
                Dans le cadre de sa stratégie 2021-2025 visant le développement
                et la transformation en une banque universelle, la BTS vient
                d’entamer le programme de conversion de ses cellules régionales
                en agences bancaires commerciales et ce afin de mieux répondre
                aux attentes de sa clientèle.En effet, le mois de juillet 2023 a
                été marqué par l’entrée en activité de 5 agences à savoir : Ben
                Arous, Manouba, Sousse, Sfax 1 et Sfax 2 .
              </p>
              <NavLink
                to={
                  "/actualités/La-BTS-BANK-entame-son-programme-de-conversion..."
                }
              >
                Lire l'article
              </NavLink>
            </div>
          </div>

          <div className="actualiteImgRight">
            <div className="content" data-aos="fade-left">
              <h3>
                La Bts Bank externalise son système d’information de secours
              </h3>
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>05 Janv 2024</p>
              </div>
              <p>
                La Banque Tunisienne de Solidarité BTS BANK et la société
                DATAXION ont signé le vendredi 25 juin 2021 une convention de
                partenariat portant sur l’hébergement la plateforme de secours
                de la Banque chez DATAXION spécialisé dans l’hébergement
                d’infrastructures informatiques dans un espace normalisé Data
                CenterLa convention a été signée au siège de la Banque.
              </p>
              <NavLink
                to={
                  "/actualités/La-BTS-BANK-externalise-son-systeme-d'information-de-secours"
                }
              >
                Lire l'article
              </NavLink>
            </div>
            <div className="photo" data-aos="fade-left">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="actualiteImgleft">
            <div className="photo" data-aos="fade-right">
              <img src={img3} alt="" />
            </div>
            <div className="content" data-aos="fade-right">
              <h3>
                Signature d’une convention de partenariat intitulée « Programme Isnad»
              </h3>
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>15 dec 2023</p>
              </div>
              <p>
                Une convention de partenariat a été signée, le vendredi 10
                septembre 2021, entre la Banque Tunisienne de Solidarité et
                l’Union des Tunisiens Indépendants pour la Liberté (UTIL),
                relative à la mise en oeuvre du « Programme Isnad ». Dans ce
                cadre, des contrats de financement ont été signés avec un
                certain nombre d’associations de micro-crédit (AMC) Ladite
                convention relative au « Programme Isnad », vise à financer une
                série de micro-projets.
              </p>
              <NavLink
                to={"/actualités/signature-d'une-convention-de-partenariat"}
              >
                Lire l'article
              </NavLink>
            </div>
          </div>

          <div className="actualiteImgRight">
            <div className="content" data-aos="fade-left">
              <h3>
                La Bts Bank confirme la solidité de ses indicateurs financiers
              </h3>
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>01 dec 2023</p>
              </div>
              <p>
                L’activité semestrielle de la Banque a été marquée par une
                trajectoire évolutive faisant preuve de solidité de ses
                indicateurs financiers et de son engagement continu en matière
                de financement des jeunes promoteurs.En effet la banque a su
                dégager durant le 1er semestre de 2023 un bénéfice net de 4.7
                millions de dinars (MD), enregistrant une croissance de 16% par
                rapport au 1er semestre de 2022 .
              </p>
              <NavLink
                to={
                  "/actualités/la-bts-bank-confirme-la-solidité-de-ses-indicateurs-financiers"
                }
              >
                Lire l'article
              </NavLink>
            </div>
            <div className="photo" data-aos="fade-left">
              <img src={img4} alt="" />
            </div>
          </div>

          <div className="actualiteImgleft">
            <div className="photo"  data-aos="fade-right">
              <img src={img5} alt="" />
            </div>
            <div className="content" data-aos="fade-right">
              <h3>
                La Bts Bank signe une convention de partenariat dans le cadre de
                la promotion de la coopération tuniso-allemande
              </h3>
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>30 nov 2023</p>
              </div>
              <p>
                Une convention a été signée entre la Banque tunisienne de
                solidarité, la « GIZ » et l’Agence de promotion des
                investissements agricoles « APIA », le vendredi 6 mai 2022, dans
                le cadre du programme « Agripreneur ».Cet accord permettra aux
                bénéficiaires d’obtenir des crédits sans intérêts, des
                subventions d’investissement, ainsi que des crédits bancaires
                pour financer des petits projets dans les régions agricoles.
              </p>
              <NavLink
                to={
                  "/actualités/la-bts-bank-signe-une-convention-de-partenariat-dans-le-cadre-de-la-promotion..."
                }
              >
                Lire l'article
              </NavLink>
            </div>
          </div>

          <div className="actualiteImgRight" >
            <div className="content" data-aos="fade-left">
              <h3>
              La Bts Bank inaugure un centre de developpement des competences
              </h3>
              <div className="date">
                <i class="ri-calendar-2-line"></i>
                <p>02 juil 2023</p>
              </div>
              <p>
                La BTS Bank a inauguré le vendredi 2 juillet 2021 un centre de
                développement des compétences au sein de son siège social, nommé
                en l’honneur de feu « Al-Amin Al-Hafsawi », l’ex-Président
                Directeur Général de la Banque, en signe de gratitude et de
                reconnaissance pour ce qu’il a fourni à la Banque tout au long
                de son mandat.Par la même occasion la Banque a signé 4
                conventions avec l’Association Professionnelle Tunisienne des
                Banques.
              </p>
              <NavLink
                to={
                  "/actualités/la-bts-bank-inaugure-un-centre-de-developpement-des-competences"
                }
              >
                Lire l'article
              </NavLink>
            </div>
            <div className="photo" data-aos="fade-left">
              <img src={img6} alt="" />
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Actualité;
