import React from "react";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import img1 from "../../assets/images/espace-Client.png";
import BackForAll from "../../components/backAll/BackForAll";
import "../../style/espaCliFourn.css";
import demande_nor from "../../assets/pdf/client/Demande de Crédit.pdf";
import demande_mourabha from "../../assets/pdf/client/Demande de crédit Mourabha.pdf";
import demande_finance_ijara from "../../assets/pdf/client/Demande de Financement Ijara.pdf";
import Engagement from "../../assets/pdf/client/Engagement.pdf";
import mod_moins_30 from "../../assets/pdf/client/Modèle d’étude de projet (Moins de 30K DT).pdf";
import mod_plus_30 from "../../assets/pdf/client/Modèle d’étude de projet (Plus de 30K DT).pdf";

const EspaceClient = () => {
  return (
    <>
      <BackForAll img={img1} text="Espace Client" />
      <div className="espace">
        <div className="container">
          <Breadcrumbs />
          <div className="content">
            <h1>
              Espace Client <hr></hr>
            </h1>
            <p>
              - Nous avons élaboré un dossier de crédit complet pour répondre
              aux besoins spécifiques de nos clients, qu'ils préfèrent la
              finance conventionnelle ou islamique. Ce dossier inclut divers
              documents essentiels adaptés au montant et au type de crédit
              demandé. Tout commence par une simple demande de crédit où nos
              clients exposent leurs besoins et objectifs financiers. Ensuite,
              nous formalisons cet accord avec un contrat détaillé pour garantir
              la clarté des termes. Pour des crédits spécifiques comme le
              mourabha et l'ijara, nous avons des formulaires dédiés couvrant
              tous les aspects nécessaires. De plus, nous fournissons un modèle
              d'étude de projet détaillé pour les projets de plus de 30 000 DT,
              et un modèle adapté pour les projets plus modestes.
              <br />
              <br />- Ces documents sont conçus pour accompagner nos clients à
              chaque étape de leur demande de crédit, en s'assurant que toutes
              les informations importantes sont prises en compte et que les
              projets sont évalués avec soin pour assurer leur réussite future.
              Pour rendre l'accès à ces documents plus simple, nous les mettons
              à disposition au format PDF, offrant ainsi une accessibilité
              maximale et une facilité de manipulation pour nos clients :
            </p>

            <div className="pdf">
              <button>
                <a href={demande_nor} download="Demande de crédit">
                  Demande de crédit
                </a>
              </button>
              <button>
                <a
                  href={demande_mourabha}
                  download="Demande de crédit Mourabaha"
                >
                  Demande de crédit Mourabha
                </a>
              </button>
              <button>
                <a
                  href={demande_finance_ijara}
                  download="Demande de Financement Ijara"
                >
                  Demande de Financement Ijara
                </a>
              </button>
              <button>
                <a href={Engagement} download="Engagement">
                  Engagement
                </a>
              </button>
              <button>
                <a
                  href={mod_moins_30}
                  download="Modèle d’étude de projet (Moins de 30K DT)"
                >
                  Modèle d’étude de projet (Moins de 30K DT)
                </a>
              </button>
              <button>
                <a
                  href={mod_plus_30}
                  download="Modèle d’étude de projet (Plus de 30K DT)"
                >
                  Modèle d’étude de projet (Plus de 30K DT)
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EspaceClient;
