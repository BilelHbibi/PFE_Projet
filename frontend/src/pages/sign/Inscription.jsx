import React from "react";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import userIcon from "../../assets/images/sign/user.png";
import loginImg from "../../assets/images/sign/inscription.png";
import "../../style/login.css";
import { Link } from "react-router-dom";

const Inscription = () => {
    return (
        <div className="container">
          <Breadcrumbs />
          <div className="login inscription">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Inscription</h2>
              <div className="input">
              <input type="text" placeholder="Entrer votre nom" />

                <input type="email" placeholder="Entrer votre email" />
    
                <input type="password" placeholder="Entrer votre mot de passe" />
              </div>{" "}
              <button className="btn secondary__btn auth__btn" type="submit">
                Créer votre compte
              </button>
              <p className="login__p">
                Vous avez déja un compte ?
                <span className="login__span"><Link to="/connexion"> Connexion</Link></span>
              </p>
            </div>
          </div>
        </div>
      );
}

export default Inscription