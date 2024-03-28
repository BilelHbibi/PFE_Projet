import React, { useEffect } from "react";
import userIcon from "../../assets/images/sign/user.png";
import loginImg from "../../assets/images/sign/inscription.png";
import "../../style/login.css";
import { useNavigate } from "react-router-dom";
import { Form, Radio, message } from "antd";
import { GetCurrentUser, RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/loadersSlice";

const rules = [
  {
    required: true,
    message: "error",
  },
];

const Inscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      const payload = {
        name: values.nom,
        email: values.email,
        password: values.password,
        role: values.role,
      };
      const response = await RegisterUser(payload);
      dispatch(setLoader(false));
      if (response.success) {
        message.success("Inscription réussie");
        form.resetFields();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    const checkUserRole = async () => {
      if (localStorage.getItem("token")) {
        try {
          dispatch(setLoader(true));
          const response = await GetCurrentUser();
          dispatch(setLoader(false));
          if (response.success) {
            // Assurez-vous que les chaînes de rôle correspondent à celles définies dans votre système
            if (response.data.role === "Client") {
              navigate("/client");
            } else if (response.data.role === "Fournisseur") {
              navigate("/profile");
            }
            // Ajoutez ici une autre condition pour d'autres rôles, si nécessaire
          }
        } catch (error) {
          dispatch(setLoader(false));
        }
      }
    };
  
    checkUserRole();
  }, [dispatch, navigate]);
  return (
    <>
      <div className="container">
        <div className="login inscription">
          <div className="login__img">
            <img src={loginImg} alt="" />
          </div>
          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Inscription</h2>
            <Form className="input" onFinish={onFinish} form={form}>
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

              <Form.Item name="role" rules={rules}>
                <Radio.Group>
                  <Radio value={"Client"}>Client</Radio>
                  <Radio value={"Fournisseur"}>Fournisseur</Radio>
                </Radio.Group>
              </Form.Item>
              <button className="secondary__btn auth__btn" type="submit">
                Créer votre compte
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inscription;
