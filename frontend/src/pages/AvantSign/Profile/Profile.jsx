import React from "react";
import { Tabs } from "antd";
import Products from "./Products/Products";
import { useSelector } from "react-redux";
import moment from "moment";
import "../../../style/AvantSign/profile.css";

const Profile = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      <div>
        <Tabs defaultActiveKey="1" className="custom-tabs">
          <Tabs.TabPane tab="Produits" key="1">
            <Products />
          </Tabs.TabPane>

          <Tabs.TabPane tab="général" key="2">
            <div className="profile2">
              <span>
                Nom: <label>{user.name}</label>
              </span>
              <span>
                Email: <label>{user.email}</label>
              </span>
              <span>
                Créé le:{" "}
                <label>
                  {moment(user.createdAt).format("MMM D , YYYY hh:mm A")}
                </label>
              </span>
            </div>
          </Tabs.TabPane>
          
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
