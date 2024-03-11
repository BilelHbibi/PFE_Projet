import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FinanceClass from "../pages/Finance/FinanceClass";
import FinanceMoura from "../pages/Finance/FinanceMoura";
import FinanceIjara from "../pages/Finance/FinanceIjara";
import EspaceClient from "../pages/Espace/EspaceClient";
import EspaceFourni from "../pages/Espace/EspaceFourni";
import Apropos from "../pages/Apropos";
import Contact from "../pages/Contact";
import Actualité from "../pages/Actualité/Actualité";
import BtsConfirme from "../pages/Actualité/BtsConfirme";
import BtsConvention from "../pages/Actualité/BtsConvention";
import BtsEntame from "../pages/Actualité/BtsEntame";
import BtsExternaliste from "../pages/Actualité/BtsExternaliste";
import BtsInaugure from "../pages/Actualité/BtsInaugure";
import BtsSign from "../pages/Actualité/BtsSign";
import AllFaqs from "../pages/faqs/AllFaqs";
import Inscription from "../pages/sign/Inscription";
import Connexion from "../pages/sign/Connexion";


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/finance" element={<Navigate to="/home" />} />
        <Route path="/espace" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/finance/financement-classique" element={<FinanceClass/>} />
        <Route path="/finance/financement-mourabaha" element={<FinanceMoura/>} />
        <Route path="/finance/financement-ijara" element={<FinanceIjara/>} />
        <Route path="/espace/espace-client" element={<EspaceClient/>} />
        <Route path="/espace/espace-fournisseur" element={<EspaceFourni/>} />
        <Route path="/Présentation-Générale" element={<Apropos/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        {/* for actualité */}
        <Route path="/actualités" element={<Actualité />} />
        <Route path="/actualités/la-bts-bank-confirme-la-solidité-de-ses-indicateurs-financiers" element={<BtsConfirme/>} />
        <Route path="/actualités/signature-d'une-convention-de-partenariat" element={<BtsConvention/>} />
        <Route path="/actualités/La-BTS-BANK-entame-son-programme-de-conversion..." element={<BtsEntame/>} />
        <Route path="/actualités/La-BTS-BANK-externalise-son-systeme-d'information-de-secours" element={<BtsExternaliste/>} />
        <Route path="/actualités/la-bts-bank-inaugure-un-centre-de-developpement-des-competences" element={<BtsInaugure/>} />
        <Route path="/actualités/la-bts-bank-signe-une-convention-de-partenariat-dans-le-cadre-de-la-promotion..." element={<BtsSign/>} />


        <Route path="/FAQ" element={<AllFaqs/>} />

      </Routes>
    </>
  );
};

export default Routers;


