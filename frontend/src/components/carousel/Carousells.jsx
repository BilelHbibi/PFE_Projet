import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./../../style/carousel.css";
import img1 from "../../assets/images/Bts scroll/carousel1.jpg"
import img2 from "../../assets/images/Bts scroll/carousel2.jpg"
import img3 from "../../assets/images/Bts scroll/carousel3.jpg"

const Carousells = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="carousel_item">
          <img src={img1} alt="" />
          <Carousel.Caption className="carousel_caption"></Carousel.Caption>
          <div className="content" >
            <p>
              Bonjour à tous !<br></br> Bienvenue dans notre banque ! 🌟🏦
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel_item">
          <img src={img2} alt="" />
          <Carousel.Caption className="carousel_caption"></Carousel.Caption>
          <div className="content">
            <p>
            Votre satisfaction est garantie en choisissant notre partenariat<br></br> 🌟🏦
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel_item"> 
          <img src={img3} alt="" />
          <Carousel.Caption className="carousel_caption"></Carousel.Caption>
          <div className="content">
            <p>
            Optimisez la gestion de vos finances  avec notre collaboration<br></br> 🌟💰
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousells;
