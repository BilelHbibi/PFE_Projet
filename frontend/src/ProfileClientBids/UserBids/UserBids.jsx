import { Modal, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/loadersSlice";
import { GetAllBids } from "../../apicalls/products";
import moment from "moment";

const UserBids = () => {
  const [bidsData, setBidsData] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllBids({ buyer: user._id });
      dispatch(setLoader(false));
      if (response.success) {
        setBidsData(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      render: (text, record) => {
        return record.product?.name;
      },
    },
    {
      title: "Bid Placed On",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD-MM-YYYY hh:mm a");
      },
    },
    {
      title: "Seller",
      dataIndex: "seller",
      render: (text, record) => {
        return record.seller?.name;
      },
    },
    {
        title: "offered Price",
        dataIndex: "offeredPrice",
        render: (text, record) => {
            return record.seller?.name;
        },
      },
    {
      title: "Bid Amount",
      dataIndex: "bidAmount",
    },

    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Contact Details",
      dataIndex: "contactDetails",
      render: (text, record) => {
        return (
          <div style={{ marginTop: "10px" }}>
            <p style={{ marginBottom: "5px" }}>Phone: {record.mobile}</p>
            <p>Email: {record.buyer?.email}</p>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column" }}>
        <Table columns={columns} dataSource={bidsData} />
      </div>
    </>
  );
};

export default UserBids;
