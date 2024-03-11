import React from "react";
import CountUp from "react-countup";
import { PiMoney } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import img from "../../../assets/images/comteur/back.jpeg"

import "../../../style/HomeCounter.css";

const HomeCounter = () => {
  const project = [
    {
      id: 1,
      icon: <FaHandshakeSimple />,
      num: "45",
      title: "NOMBRE PARTENAIRES",
    },
    {
      id: 2,
      icon: <FaBuilding />,
      num: "30",
      title: "NOMBRE D'AGENCE",
    },
    {
      id: 3,
      icon: <FaTruckLoading />,
      num: "2640",
      title: "NOMBRE DE FOURNISSEURS",
    },
    {
      id: 4,
      icon: <PiMoney />,
      num: "60",
      title: "CAPITAL",
      Dt: "MD",
      esp: " ",
    },
  ];
  return (
    <>
      <div className="counter">
        <div className="img">
        <img src={img} alt="" />
        </div>
        <div className="overflow"></div>
        <div className="container grid4">
          {project.map((item) => (
            <div className="box" data-aos="zoom-in">
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={4} end={item.num} />
                {item.esp}
                {item.Dt}
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCounter;
