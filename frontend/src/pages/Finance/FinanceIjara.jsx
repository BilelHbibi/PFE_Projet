import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import img1 from "../../assets/images/BackForAll.jpg";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import "../../style/finance.css";
import img2 from "../../assets/images/finance/ijara.jpeg";

const FinanceIjara = () => {
  return (
    <>
      <BackForAll img={img1} text="Financement Ijara" />
      <div className="container">
        <Breadcrumbs />
        <div className="financement ijara">
          <div className="content">
            <p>
              <strong>L’Ijara</strong> est un Contrat de financement pratiqué
              par les banques islamiques en Tunisie en faveur des Professionnels
              & Entreprises. à travers ce Contrat, La Banque est désignée dans
              le contrat en tant que "Propriétaire" ou "Mouajir" "مؤجّر",
              acquière des biens (meubles & immeubles) désignés par le client,
              en tant que "Locataire" ou "Moustajir" "مستأجر", pour les mettre à
              sa disposition afin d’en tirer fruits, en contrepartie d’une
              rémunération (loyer) sur une durée convenue d'avance. Ces
              opérations revêtent de la vente de l’usufruit non de l’actif. On
              peut donc définir l’Ijara comme la jouissance d’un usufruit connu
              avec un loyer connu pour une durée déterminée. Généralement, le
              transfert de propriété à la fin de période du contrat de location,
              s’opère au dinar symbolique. Ce mode est désigné par{" "}
              <strong>"Ijara Mountahia bil Tamlik"</strong> "إجارة منتهية
              بالتمليك".
            </p>

            <div className="image">
              <img src={img2} alt="" />
            </div>
            <h4>Utilité de ce mode de Financement :</h4>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                L’ijara est un Contrat de financement pour les investissements
                mobiliers et immobiliers ;
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                Ce type de financement est sollicité compte tenu des divers
                avantages.{" "}
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                C'est un Moyen souple et pratique donnant accès à d’importants
                avantages fiscaux.
              </p>
            </div>

            <h4>Conformité à la Charia :</h4>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                L’objet de la location (l’utilisation du bien loué) doit être
                connu et accepté par les deux parties ;
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                La location doit porter sur des biens non destructibles du fait
                de la jouissance ou de l’utilisation (pas de biens consommables)
                ;
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                La durée de location, le délai de paiement, le montant du loyer
                et la périodicité doivent être déterminés et connus à la
                conclusion du contrat Ijara.
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                Le transfert de la propriété du bien, à la fin de la durée de
                location, doit être effectué moyennant un acte séparé (Vente,
                donation).{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceIjara;
