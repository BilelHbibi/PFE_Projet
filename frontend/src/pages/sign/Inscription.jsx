import React, { useEffect } from "react";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import userIcon from "../../assets/images/sign/user.png";
import loginImg from "../../assets/images/sign/inscription.png";
import "../../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/loadersSlice";
import Header from "../../components/header/Header";

const rules = [
  {
    required: true,
    message: "error",
  },
];

const Inscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      const payload = {
        name: values.nom, // Use values.nom for the name field
        email: values.email,
        password: values.password,
      };
      const response = await RegisterUser(payload);
      dispatch(setLoader(false));
      if (response.success) {
        navigate("/connexion");
        message.success("Inscription réussie"); // Show success message
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message); // Show error message
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/client");
    }
  }, []);

  return (
    <>
      <Header />
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
            <Form className="input" onFinish={onFinish}>
              <Form.Item name="nom" rules={rules}>
                <input type="text" placeholder="Entrer votre nom" />
              </Form.Item>
              <Form.Item name="email" rules={rules}>
                <input type="email" placeholder="Entrer votre email" />
              </Form.Item>
              <Form.Item name="password" rules={rules}>
                <input
                  type="password"
                  placeholder="Entrer votre mot de passe"
                />
              </Form.Item>
              <button className="btn secondary__btn auth__btn" type="submit">
                Créer votre compte
              </button>
            </Form>

            <p className="login__p">
              Vous avez déja un compte ?
              <span className="login__span">
                <Link to="/connexion"> Connexion</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inscription;
