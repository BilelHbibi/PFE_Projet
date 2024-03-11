import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import img1 from "../../assets/images/BackForAll.jpg";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import "../../style/finance.css";
import img2 from "../../assets/images/finance/mourabaha.jpeg";

const FinanceMoura = () => {
  return (
    <>
      <BackForAll img={img1} text="financement Mourabaha" />
      <div className="container">
        <Breadcrumbs />
        <div className="financement mourabaha">
          <div className="content">
            <p>
              <strong>La Mourabaha</strong> est un contrat de vente à travers
              lequel, la banque procède à l'acquisition d'un bien ou d'un
              service désigné par le Client, qui ordonne l'achat, auprès d'un
              fournisseur, tierce partie. Une fois propriétaire, la Banque
              transfert cette propriété au{" "}
              <strong>Client donneur d'ordre</strong> d'achat, moyennant un prix
              de vente convenu d'avance (البيع بثمن معلوم) composé du prix
              d'acquisition initial majoré d'une marge de profit fixe, convenu
              préalablement. la Marge de Profit peut être un montant fixé
              convenu d'avance ou un pourcentage du prix d'acquisition initial.
              Le client s'engage à rembourser le prix de vente sur des échéances
              fixes convenues d'avance. Banque BTS achète le bien qu’elle
              revend à terme à son client moyennant une marge bénéficiaire
              convenue entre les deux parties. Cette marge de profit peut
              consister en un montant fixe ou en un pourcentage du coût
              d’acquisition initial dudit bien. La Mourabaha est un mode de
              financement proposé par Banque BTS aussi bien pour les Clients
              particuliers qu’à ceux des Entreprises et Professionnels pour le
              financement :
            </p>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>De l’immobilier ;</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>De véhicules de tourisme, utilitaires et industriels ;</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                Des besoins d’exploitation : stocks, matières premières,
                produits intermédiaires…;
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>Des équipements à usage professionnels et / ou privés.</p>
            </div>
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <h4>Conformité à la Charia :</h4>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>L’objet du contrat doit être licite ; </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>L’achat/revente doivent être réels et non fictifs ;</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                Le prix de revient, la marge bénéficiaire de la Banque et les
                délais de paiement doivent être préalablement connus, fixés et
                acceptés par les deux parties (الإيجاب والقبول).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceMoura;
