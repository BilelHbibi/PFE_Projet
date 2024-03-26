import React, { useEffect, useState } from "react";
import { Avatar, Badge, message } from "antd";
import { GetCurrentUser } from "../../../apicalls/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import { setUser } from "../../../redux/usersSlice";
import "../../../style/AvantSign/protectedPage.css";
import Spinner from "../spinnerSign/Spinner";
import Notifications from "./Notifications";
import {
  GetAllNotifications,
  ReadAllNotifications,
} from "../../../apicalls/notification";

const ProtectedPage = ({ children }) => {
  const [notifications = [], setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
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

  const getNotifications = async () => {
    try {
      const response = await GetAllNotifications();
      if (response.success) {
        setNotifications(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const readNotifications = async () => {
    try {
      const response = await ReadAllNotifications();
      if (response.success) {
        getNotifications();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
      getNotifications();
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
              {/* header */}
              <div className="header">
                <h1
                  onClick={() => navigate("/client")}
                  style={{ cursor: "pointer" }}
                >
                  Market Place
                </h1>
              </div>

              {/* body */}
              <div className="name">
                <span
                  onClick={() => {
                    if (user.role === "user") {
                      navigate("/profile");
                    } else {
                      navigate("/admin");
                    }
                  }}
                >
                  {user.name}
                </span>

                <Badge
                  count={
                    notifications?.filter((notification) => !notification.read)
                      .length
                  }
                  onClick={() => {
                    readNotifications();
                    setShowNotifications(true);
                  }}
                >
                  <Avatar
                    size="circle"
                    icon={<i className="ri-notification-2-line"></i>}
                  />
                </Badge>

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

            {
              <Notifications
                notifications={notifications}
                reloadNotifications={getNotifications}
                showNotifications={showNotifications}
                setShowNotifications={setShowNotifications}
              />
            }
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
