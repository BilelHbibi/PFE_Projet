import React, { useEffect } from "react";
import { Tabs } from "antd";
import Products from "./Products";
import Users from "./Users";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Admin = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/client");
    }
  });
  return (
    <>
      <div>
        <Tabs>
          <Tabs.TabPane tab="Produits" key="1">
            <Products />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Utilisateurs" key="2">
            <Users />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Admin;
