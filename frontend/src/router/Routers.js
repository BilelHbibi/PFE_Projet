import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import FinanceClass from "../pages/Finance/FinanceClass";
import FinanceMoura from "../pages/Finance/FinanceMoura";
import FinanceIjara from "../pages/Finance/FinanceIjara";
import EspaceClient from "../pages/Espace/EspaceClient";
import EspaceFourni from "../pages/Espace/EspaceFourni";
import Apropos from "../pages/Apropos";
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
import ProtectedPage from "../components/ensemble/ProtectedPage/ProtectedPage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Profile from "../pages/AvantSign/Profile/Profile";
import Client from "../pages/AvantSign/client/Client";
import { useSelector } from "react-redux";
import Admin from "../pages/AvantSign/admin/Admin";
import ProductInfo from "../pages/AvantSign/ProductInfo/ProductInfo";
import Spinner from "../components/ensemble/spinnerSign/Spinner";
import Preloader from "../Preloader/Preloader";
import ProfileClient from "../ProfileClientBids/ProfileClient";
import Contact from "../pages/Contact";
import ActivationPage from "../pages/sign/ActivationPage";


const Routers = () => {
  const loading = useSelector((state) => state.loaders.loading);
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Vérifiez si c'est la première visite de l'utilisateur
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null;
    if (isFirstVisit) {
      setShowPreloader(true);
      localStorage.setItem("isFirstVisit", "false");
    }
  }, []);
 

  return (
    <>
      {showPreloader && (location.pathname === "/" || location.pathname === "/") && <Preloader />}
      {loading && location.pathname !== "/" && location.pathname !== "/home" && <Spinner />}
      <Routes>
        <Route path="/" element={<><Header/><Navigate to="/home" /><Footer/></>} />
        <Route path="/finance" element={<><Header/><Navigate to="/home" /><Footer/></>} />
        <Route path="/espace" element={<><Header/><Navigate to="/home" /><Footer/></>} />
        <Route path="/home" element={<><Header/><Home/><Footer/></>} />
        <Route path="/accueil" element={<><Header/><Home/><Footer/></>} />
        <Route path="/finance/financement-classique" element={<><Header/><FinanceClass/><Footer/></>} />
        <Route path="/finance/financement-mourabaha" element={<><Header/><FinanceMoura/><Footer/></>} />
        <Route path="/finance/financement-ijara" element={<><Header/><FinanceIjara/><Footer/></>} />
        <Route path="/espace/espace-client" element={<><Header/><EspaceClient/><Footer/></>} />
        <Route path="/espace/espace-fournisseur" element={<><Header/><EspaceFourni/><Footer/></>} />
        <Route path="/Présentation-Générale" element={<><Header/><Apropos/><Footer/></>} />
        <Route path="/contact" element={<><Header/><Contact/><Footer/></>} />
        <Route path="/connexion" element={<><Connexion/><Footer/></>} />
        <Route path="/confirm/:activationCode" element={<><ActivationPage/></>} />
        <Route path="/inscription" element={<><ProtectedPage><Inscription/></ProtectedPage></>} />
        

        {/* for actualité */}
        <Route path="/actualités" element={<><Header/><Actualité/><Footer/></>} />
        <Route path="/actualités/la-bts-bank-confirme-la-solidité-de-ses-indicateurs-financiers" element={<><Header/><BtsConfirme/><Footer/></>} />
        <Route path="/actualités/signature-d'une-convention-de-partenariat" element={<><Header/><BtsConvention/><Footer/></>} />
        <Route path="/actualités/La-BTS-BANK-entame-son-programme-de-conversion..." element={<><Header/><BtsEntame/><Footer/></>} />
        <Route path="/actualités/La-BTS-BANK-externalise-son-systeme-d'information-de-secours" element={<><Header/><BtsExternaliste/><Footer/></>} />
        <Route path="/actualités/la-bts-bank-inaugure-un-centre-de-developpement-des-competences" element={<><Header/><BtsInaugure/><Footer/></>} />
        <Route path="/actualités/la-bts-bank-signe-une-convention-de-partenariat-dans-le-cadre-de-la-promotion..." element={<><Header/><BtsSign/><Footer/></>} />


        <Route path="/FAQ" element={<><Header/><AllFaqs/><Footer/></>} />


        {/* Avant Inscription */}
        <Route path="/client" element={<><ProtectedPage><Client/></ProtectedPage></>} />
        <Route path="/profile" element={<><ProtectedPage><Profile/></ProtectedPage></>} />
        <Route path="/admin" element={<><ProtectedPage><Admin /></ProtectedPage></>} />
        <Route path="/product/:id" element={<><ProtectedPage><ProductInfo /></ProtectedPage></>} />
        <Route path="/profileClient" element={<><ProtectedPage><ProfileClient /></ProtectedPage></>} />
        

      </Routes>
    </>
  );
};

export default Routers;
