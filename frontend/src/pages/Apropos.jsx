import React, { useEffect } from "react";
import Breadcrumbs from "../components/breadCrumbs/Breadcrumbs";
import BackForAll from "../components/backAll/BackForAll";
import img1 from "../assets/images/Bts scroll/carousel1.jpg";
import { useLocation } from "react-router-dom";

const Apropos = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
    <ScrollToTop />
      <BackForAll text="Présentation Générale" img={img1} />
      <div className="container">
        <Breadcrumbs />
        <div className="financement generale">
          <div className="content">
            <p>
              <span>
                La Banque Tunisienne de Solidarité (BTS) est créée en 1997 à
                l’initiative de l’Etat Tunisien pour financer les jeunes
                diplômés de l’enseignement supérieur et de la formation
                professionnelle. Elle est spécialisée dans la mésofinance pour
                la promotion des très petites entreprises (TPE).
              </span>
              <br />
              Depuis ses débuts, le  21 mai 1997, Banque BTS s'engage à
              fournir une gamme novatrice de produits et services, en accord
              avec les principes de la Finance Islamique, destinés aux
              particuliers, aux professionnels et aux entreprises. Banque BTS
              propose une vaste sélection de produits et services adaptés aux
              besoins des clients, couvrant les comptes de dépôt, les solutions
              de financement, les investissements participatifs, les services
              monétiques et la banque à distance. Pour répondre aux besoins
              spécifiques des entreprises en matière de gestion de trésorerie,
              Banque BTS offre des solutions de financement pour les cycles
              d'exploitation et d'investissement. De plus, elle développe des
              pratiques innovantes pour le traitement des opérations liées au
              commerce extérieur. Les conseillers clientèle et les chargés
              d'affaires de Banque BTS sont à l'écoute des clients, proposant
              les solutions les plus adaptées en identifiant les opportunités et
              en concrétisant les ambitions de chacun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apropos;
