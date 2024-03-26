import { Modal, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { DeleteNotification } from "../../../apicalls/notification";
import { setLoader } from "../../../redux/loadersSlice";
import { useDispatch } from "react-redux";

const Notifications = ({
  notifications = [],
  reloadNotifications,
  showNotifications,
  setShowNotifications,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteNotification = async (id) => {
    try {
      dispatch(setLoader(true));
      const response = await DeleteNotification(id);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        reloadNotifications();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };
  return (
    <Modal
      title="Notifications"
      open={showNotifications}
      onCancel={() => setShowNotifications(false)}
      footer={null}
      centered
      width={1000}
    >
      <div className="notification">
        {notifications.map((notification) => {
          return (
            <div className="content" key={notification._id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  onClick={() => {
                    navigate(notification.onClick);
                    setShowNotifications(false);
                  }}
                >
                  <h1>{notification.title}</h1>
                  <span>{notification.message}</span>
                  <h1>{moment(notification.createAt).fromNow()}</h1>
                </div>
                <i
                  className="ri-delete-bin-line"
                  onClick={() => {
                    deleteNotification(notification._id);
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default Notifications;
