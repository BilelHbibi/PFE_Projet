import React from "react";
import "../../style/footer.css";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/images/Bts scroll/logo2.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="haut">
            <div className="first">
              <h2>Autre</h2>
              <ul>
                <li>
                  <NavLink to={"/accueil"}>Accueil</NavLink>
                </li>
                <li>
                  <NavLink to={"/FAQ"}>FAQ</NavLink>
                </li>

                <li>
                  <NavLink to={"/actualités"}>Actualités</NavLink>
                </li>
                <li>
                  <NavLink to={"/Présentation-Générale"}>A Propos</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="second">
              <h2>Nous suivre</h2>
              <ul>
                <li>
                  <NavLink to={"https://www.facebook.com/bts.bank.officiel/"}>
                    <i class="ri-facebook-circle-fill"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"https://www.linkedin.com/company/bts-bank/"}>
                    <i class="ri-linkedin-box-fill"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={
                      "https://www.youtube.com/@banquetunisiennedesolidari7228"
                    }
                  >
                    <i class="ri-youtube-fill"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"https://twitter.com/btsbanktn?lang=fr"}>
                    <i class="ri-twitter-x-line"></i>{" "}
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="third">
              <h2>Financement</h2>
              <ul>
                <li>
                  <NavLink to={"/finance/financement-classique"}>
                    Financement Classique
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/finance/financement-mourabaha"}>
                    Financement Mourabaha
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/finance/financement-ijara"}>
                    Financement Ijara
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>
          <div className="bas">
            <div className="one">
              <img src={logo2} alt="" />
              <h3>تمول مشروعك</h3>
            </div>
            <p>© 2024 Banque BTS</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
