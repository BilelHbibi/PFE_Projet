import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import userIcon from "../../assets/images/sign/user.png";
import loginImg from "../../assets/images/sign/login.png";
import "../../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { LoginUser } from "../../apicalls/users";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/loadersSlice";

const rules = [
  {
    required: true,
    message: "error",
  },
];

const Connexion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      const payload = {
        email: values.email,
        password: values.password,
      };
      const response = await LoginUser(payload);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message); // Show success message
        localStorage.setItem("token", response.data);
        window.location.href = "/client";
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
        <div className="login">
          <div className="login__img">
            <img src={loginImg} alt="" />
          </div>
          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Connexion</h2>
            <Form className="input" onFinish={onFinish}>
              <Form.Item name="email" rules={rules}>
                <input type="email" placeholder="Entrer votre email" />
              </Form.Item>
              <Form.Item name="password" rules={rules}>
                <input
                  type="password"
                  placeholder="Entrer votre mot de passe"
                />
              </Form.Item>
              <button className="secondary__btn auth__btn" type="submit">
                Connexion
              </button>
            </Form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Connexion;
