import { Modal, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { DeleteNotification } from "../../../apicalls/notification";
import { setLoader } from "../../../redux/loadersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PDFGenerator from "../PDF/PDFGenerator ";

const Notifications = ({
  notifications = [],
  reloadNotifications,
  showNotifications,
  setShowNotifications,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [pdfType, setPdfType] = useState(null); 
  const { user } = useSelector((state) => state.users);

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

  const handleDownloadPdf = (notification, type) => {
    setSelectedNotification(notification);
    setPdfType(type); // Set the PDF type based on which button is clicked
  };

  return (
    <Modal
      title="Notifications"
      open={showNotifications}
      onCancel={() => {
        setShowNotifications(false);
        setSelectedNotification(null);
      }}
      footer={null}
      centered
      width={1000}
    >
      <div className="notification">
        {notifications.map((notification) => {
          console.log(notification);
          return (
            <div className="content" key={notification._id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    onClick={() => {
                      if (user?.role !== "Client") {
                        navigate(notification.onClick);
                      }
                      setShowNotifications(false);
                    }}
                  >
                    <h1>{notification.title}</h1>
                    <span>{notification.message}</span>

                    <h1>{moment(notification.createAt).fromNow()}</h1>
                  </div>
                  <div>
                    {user?.role === "Client" &&
                      notification.title !== "Bid Rejected" && (
                        <button onClick={() => handleDownloadPdf(notification, "tamkin")}>
                          Télécharger Act Devis
                        </button>
                      )}
                    
                  </div>
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
      {selectedNotification && pdfType === "tamkin" && <PDFGenerator notification={selectedNotification} />}
    </Modal>
  );
};

export default Notifications;
