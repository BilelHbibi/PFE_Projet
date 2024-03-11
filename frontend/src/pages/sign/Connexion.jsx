import React from "react";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import userIcon from "../../assets/images/sign/user.png";
import loginImg from "../../assets/images/sign/login.png";
import "../../style/login.css";
import { Link } from "react-router-dom";

const Connexion = () => {
    return (
        <div className="container">
          <Breadcrumbs />
          <div className="login">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Connexion</h2>
              <div className="input">
                <input type="email" placeholder="Entrer votre email" />
    
                <input type="password" placeholder="Entrer votre mot de passe" />
              </div>{" "}
              <button className="btn secondary__btn auth__btn" type="submit">
                Connexion
              </button>
              <p className="login__p">
                Vous navez pas de compte ?
                <span className="login__span"><Link to="/inscription"> Inscrire</Link></span>
              </p>
            </div>
          </div>
        </div>
      );
}

export default Connexion