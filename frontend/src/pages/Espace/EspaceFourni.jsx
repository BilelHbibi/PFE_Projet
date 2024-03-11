import React from "react";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import BackForAll from "../../components/backAll/BackForAll";
import img1 from "../../assets/images/espace-fourni.jpg";
import "../../style/espaCliFourn.css";
import Personne_Physique from "../../assets/pdf/fournisseur/Personne Physique.pdf";
import Personne_Morale from "../../assets/pdf/fournisseur/Personne Morale.pdf";
import Engagement from "../../assets/pdf/fournisseur/Engagement.pdf";
import Demande_dadhésion from "../../assets/pdf/fournisseur/Demande d’adhésion.pdf";

const EspaceFourni = () => {
  return (
    <>
      <BackForAll img={img1} text="Espace Fournisseur" />
      <div className="espace">
        <div className="container">
          <Breadcrumbs />
          <div className="content">
            <h1>
              Espace Fournisseur <hr></hr>
            </h1>
            <p>
              - Nous sommes ravis de vous accueillir parmi nos partenaires.
              Avant de démarrer notre collaboration, veuillez nous fournir les
              documents nécessaires. Si vous êtes une personne physique,
              veuillez nous transmettre votre pièce d'identité et des preuves
              d'inscription fiscale. Si vous représentez une personne morale,
              veuillez nous fournir les statuts de la société ainsi qu'un
              extrait Kbis récent. De plus, veuillez remplir un engagement
              détaillant vos conditions de collaboration, et nous soumettre une
              demande d’adhésion pour mieux comprendre vos activités en tant que
              fournisseur.
              <br />
              <br />- Ces documents sont conçus pour accompagner nos
              fournisseurs à chaque étape de leur demande, garantissant ainsi la
              prise en compte de toutes les informations importantes pour
              assurer le succès futur de nos projets communs. Pour faciliter
              l'accès à ces documents, nous les mettons à disposition au format
              PDF, permettant une accessibilité maximale et une manipulation
              aisée
            </p>

            <div className="pdf">
              <button>
                <a href={Personne_Physique} download="Personne Physique">
                  Personne Physique
                </a>
              </button>
              <button>
                <a href={Personne_Morale} download="Personne Morale">
                  Personne Morale
                </a>
              </button>
              <button>
                <a href={Engagement} download="Engagement">
                  Engagement
                </a>
              </button>
              <button>
                <a href={Demande_dadhésion} download="Demande d’adhésion">
                  Demande d’adhésion
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EspaceFourni;
