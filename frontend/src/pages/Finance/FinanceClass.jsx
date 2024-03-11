import React from "react";
import BackForAll from "../../components/backAll/BackForAll";
import img1 from "../../assets/images/BackForAll.jpg";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import "../../style/finance.css";
import img2 from "../../assets/images/finance/classique.jpg";

const FinanceClass = () => {
  return (
    <>
      <BackForAll img={img1} text="Financement Classique" />
      <div className="container">
        <Breadcrumbs />
        <div className="financement classique">
          <div className="content">
            <p>
              Dans le cadre du financement classique de la Banque BTS en
              Tunisie, il existe une option appelée contrat de location. Ici, la
              banque agit comme propriétaire et le client comme locataire. La
              banque achète les biens demandés par le client et les met à
              disposition moyennant un loyer fixé à l'avance. À la fin du
              contrat, le client peut choisir de devenir propriétaire en payant
              un petit montant supplémentaire. Cette méthode offre une
              alternative à l'achat direct des biens, ce qui permet une
              utilisation flexible sans engagement à long terme. Elle est
              souvent utilisée par les entreprises et les professionnels pour
              obtenir des équipements et des biens nécessaires.Découvrez
              ci-dessous les différents types de prêts offerts par la Banque BTS
              :
            </p>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>Prêts immobiliers</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>Prêts automobiles</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>Financements d'équipements professionnels ou privés</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>Crédits pour les besoins d'exploitation</p>
            </div>

            
            <h2>
              Principe de financement <strong>Classique</strong>
            </h2>
            <div className="image">
              <img src={img2} alt="" />
            </div>

            <h4>Conformité à la Charia :</h4>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>L'objet du contrat doit être licite.</p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                Les modalités de prêt doivent être clairement définies et
                acceptées par les deux parties.
              </p>
            </div>
            <div className="check">
              <i class="ri-check-fill"></i>
              <p>
                Les intérêts sur les prêts doivent être équitables et conformes
                aux principes de la Charia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceClass;
