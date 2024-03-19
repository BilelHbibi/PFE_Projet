import React, { useEffect } from "react";
import { message } from "antd";
import { GetCurrentUser } from "../../../apicalls/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import { setUser } from "../../../redux/usersSlice";
import "../../../style/AvantSign/protectedPage.css";
import Spinner from "../spinnerSign/Spinner";

const ProtectedPage = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false));
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        navigate("/connexion");
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(true));
      navigate("/connexion");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/connexion");
    }
  }, []);


  return (
    <>

      {user && (
        <>
          <div className="ProtectedPage">
            <div className="ProtectedPage2">
              <div className="header">
                <h1>Market Place</h1>
              </div>
              <div className="name">
                <i className="ri-shield-user-line"></i>
                <span
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  {user.name}
                </span>
                <i
                  className="ri-logout-box-r-line"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/connexion");
                  }}
                ></i>
              </div>
            </div>

            <div>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
