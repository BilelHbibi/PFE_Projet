import React from "react";
import { Tabs } from "antd";
import UserBids from "./UserBids/UserBids";
import { useSelector } from "react-redux";
import moment from "moment";
import "../style/AvantSign/profile.css";

const ProfileClient = () => {
  const { user } = useSelector((state) => state.users);

  return (
    <>
      <div>
        <Tabs defaultActiveKey="1" className="custom-tabs">
          <Tabs.TabPane tab="My Bids" key="1">
            <UserBids />
          </Tabs.TabPane>
          <Tabs.TabPane tab="General" key="2">
            <div className="profile2">
              <span>
                Name: <label>{user.name}</label>
              </span>
              <span>
                Email: <label>{user.email}</label>
              </span>
              <span>
                Created At:{" "}
                <label>{moment(user.createdAt).format("MMM D , YYYY hh:mm A")}</label>
              </span>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ProfileClient;
