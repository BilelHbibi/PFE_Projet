import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img from "../../assets/images/BackForAll2.jpg";
import img2 from "../../assets/images/actualité/act3.jpg";
import logo from "../../assets/images/actualité/logo.jpg";
import img3 from "../../assets/images/actualité/act3(2).jpg";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const BtsExternaliste = () => {
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
                <p>05 Janv 2023</p>
              </div>
              <h3>
                LA BTS BANK EXTERNALISE SON SYSTÈME D’INFORMATION DE SECOURS.
              </h3>
              <p>
                La Banque Tunisienne de Solidarité BTS BANK et la société
                DATAXION ont signé le vendredi 25 juin 2023 une convention de
                partenariat portant sur l’hébergement la plateforme de secours
                de la Banque chez DATAXION spécialisé dans l’hébergement
                d’infrastructures informatiques dans un espace normalisé Data
                CenterLa convention a été signée au siège de la Banque par son
                Directeur Général Mr Khalifa SBOUI et Mr Naceur KCHAOU Directeur
                Général de DATAXION en présence de cadres et de responsables des
                deux parties.Ce nouveau partenariat s’inscrit dans la stratégie
                de la Banque à travers la mise en œuvre de son schéma directeur
                informatique et de renforcer la sécurité de son système
                d’information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtsExternaliste;
