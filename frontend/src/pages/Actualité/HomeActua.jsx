import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/actualite.css";
import img1 from "../../assets/images/actualité/act1.jpg";
import img3 from "../../assets/images/actualité/act3.jpg";
import img4 from "../../assets/images/actualité/act4(1).jpg";

const HomeActua = () => {
  return (
    <>
      <div className="homeActua">
        <div className="container">
          <div className="gaper">
            <div className="compo"  data-aos='flip-left'>
              <div>
                <img src={img1} alt="" />
              </div>
              <NavLink
                to={
                  "/actualités/La-BTS-BANK-entame-son-programme-de-conversion..."
                }
              >
                La BTS BANK entame son programme de conversion de son réseau
                d’agences.
              </NavLink>
              <p>
                Dans le cadre de sa stratégie 2021-2025 visant le développement
                et la transformation en une banque universelle, la BTS vient
                d’entamer le programme de conversion de ses cellules régionales
                en agences bancaires commerciales et ce afin de mieux répondre
                aux attentes de sa clientèle.
              </p>
              <NavLink
                to={
                  "/actualités/La-BTS-BANK-entame-son-programme-de-conversion..."
                }
              >
                Lire l'article
              </NavLink>
            </div>

            <div className="compo" data-aos='flip-left'>
              <div>
                <img src={img3} alt="" />
              </div>
              <NavLink
                to={
                  "/actualités/La-BTS-BANK-externalise-son-systeme-d'information-de-secours"
                }
              >
                LA BTS BANK EXTERNALISE SON SYSTÈME D’INFORMATION DE SECOURS
              </NavLink>
              <p>
                La Banque Tunisienne de Solidarité BTS BANK et la société
                DATAXION ont signé le vendredi 25 juin 2023 une convention de
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

            <div className="compo" data-aos='flip-left'>
              <div>
                <img src={img4} alt="" />
              </div>
              <NavLink
                to={"/actualités/signature-d'une-convention-de-partenariat"}
              >
                SIGNATURE D’UNE CONVENTION DE PARTENARIAT
              </NavLink>
              <p>
                Une convention de partenariat a été signée, le vendredi 10
                septembre 2023, entre la Banque Tunisienne de Solidarité et
                l’Union des Tunisiens Indépendants pour la Liberté (UTIL),
                relative à la mise en oeuvre du « Programme Isnad ». Dans ce
                cadre, des contrats de financement ont été signés avec un
                certain nombre d’associations de micro-crédit.
              </p>
              <NavLink
                to={"/actualités/signature-d'une-convention-de-partenariat"}
              >
                Lire l'article
              </NavLink>
            </div>
          </div>
          <div className="btn" data-aos='fade-up'>
            <button>
              <NavLink to={"/actualités"}>Voir toutes les actualités</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeActua;
