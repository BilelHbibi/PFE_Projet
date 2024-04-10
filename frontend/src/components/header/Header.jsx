import React, { useEffect, useRef } from "react";
import "./../../style/header.css";
import { Link, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import img1 from "../../assets/images/Bts scroll/logo.png";

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);
  const btn = useRef(null);
  const con = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky__header");
        } else {
          headerRef.current.classList.remove("sticky__header");
        }
      }
    };
  
    // Ajoutez l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);
  
    // Nettoyez en supprimant l'écouteur d'événement
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("show__menu");
    btn.current?.classList.toggle("show__btn");
    con.current?.classList.toggle("con");
  };

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="nav_wrapper">
          {/* =============logo start============= */}
          <div className="logo">
            <img src={img1} alt="" />
          </div>

          {/* =============logo end============= */}

          {/* =============menu start============= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              <li className="nav_item">
                <NavLink
                  to={"/home"}
                  className={(navClass) =>
                    navClass.isActive ? "active__link" : ""
                  }
                >
                  Accueil
                  <i class="ri-arrow-down-s-fill"></i>
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  to={"/finance"}
                  className={(navClass) =>
                    navClass.isActive ? "active__link" : ""
                  }
                >
                  Financement
                  <i class="ri-arrow-down-s-fill"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="drop">
                    <NavLink
                      to={"/finance/financement-classique"}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      Financement Classique
                    </NavLink>
                  </li>
                  <li className="drop">
                    <NavLink
                      to={"/finance/financement-mourabaha"}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      Financement Mourabaha
                    </NavLink>
                  </li>
                  <li className="drop">
                    <NavLink
                      to={"/finance/financement-ijara"}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      Financement Ijara
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav_item">
                <NavLink
                  to={"/espace"}
                  className={(navClass) =>
                    navClass.isActive ? "active__link" : ""
                  }
                >
                  Espace&nbsp;Partenaires
                  <i class="ri-arrow-down-s-fill"></i>
                </NavLink>
                <ul className="dropdown">
                  <li className="drop">
                    <NavLink
                      to={"/espace/espace-client"}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      Espace Client
                    </NavLink>
                  </li>
                  <li className="drop">
                    <NavLink
                      to={"/espace/espace-fournisseur"}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      Espace Fournisseur
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav_item">
                <NavLink
                  to={"/Présentation-Générale"}
                  className={(navClass) =>
                    navClass.isActive ? "active__link" : ""
                  }
                >
                  À propos
                  <i class="ri-arrow-down-s-fill"></i>
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  to={"/contact"}
                  className={(navClass) =>
                    navClass.isActive ? "active__link" : ""
                  }
                >
                  Contact
                  <i class="ri-arrow-down-s-fill"></i>
                </NavLink>
              </li>
            </ul>
          </div>
          {/* =============menu end============= */}

          {/* =============button start============= */}
          <div className="nav_right">
            <div className="nav_btns" ref={con}>
            
              <Button className="btn primary__btn">
                <Link to="/connexion">Connexion</Link>
              </Button>
            </div>
          </div>
          {/* =============button end============= */}

          <span className="mobile__menu" onClick={toggleMenu} ref={btn}>
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
