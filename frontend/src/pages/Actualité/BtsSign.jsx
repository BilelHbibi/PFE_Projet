import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img from "../../assets/images/BackForAll2.jpg";
import img2 from "../../assets/images/actualité/act5.jpg";
import img3 from "../../assets/images/actualité/act5(1).jpg";
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

const BtsSign = () => {
  return (
    <>
      <ScrollToTop />
      <BackForAll img={img} text="Actualités" />
      <div className="ActualitésId">
        <div className="container">
          <Breadcrumbs className="SignBread"/>
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
                LA BTS BANK SIGNE UNE CONVENTION DE PARTENARIAT DANS LE CADRE DE
                LA PROMOTION DE LA COOPÉRATION TUNISO-ALLEMANDE
              </h3>
              <p>
                Une convention a été signée entre la Banque tunisienne de
                solidarité, la « GIZ » et l’Agence de promotion des
                investissements agricoles « APIA », le vendredi 6 mai 2022, dans
                le cadre du programme « Agripreneur ».Cet accord permettra aux
                bénéficiaires d’obtenir des crédits sans intérêts, des
                subventions d’investissement, ainsi que des crédits bancaires
                pour financer des petits projets dans les régions agricoles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtsSign;
