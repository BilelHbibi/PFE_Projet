import React from "react";
import Carousells from "../components/carousel/Carousells";
import Titre from "../components/ensemble/titre/Titre";
import HomeActua from "./Actualité/HomeActua";
import HomeFaq from "./faqs/HomeFaq";
import HomeCounter from "../components/ensemble/counter/HomeCounter";

const Home = () => {
  return (
    <>
    <Carousells />
    <Titre titre="Actualités" />
    <HomeActua/>
    <HomeFaq/>
    <HomeCounter/>
    </>
  );
};

export default Home;
