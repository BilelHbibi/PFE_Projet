import { Modal, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/loadersSlice";
import { GetAllBids } from "../../../../apicalls/products";
import moment from "moment";
import Divider from "../../../../components/ensemble/ProtectedPage/Divider";

const Bids = ({ showBidsModal, setSowBidsModal, selectedProduct }) => {
  const [bidsData, setBidsData] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllBids({ product: selectedProduct._id });
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
      title: "Bid Placed On",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD-MM-YYYY hh:mm a");
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        return record.buyer.name;
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
            <p>Email: {record.buyer.email}</p>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (selectedProduct) {
      getData();
    }
  }, [selectedProduct]);
  return (
    <>
      <Modal
        title=""
        open={showBidsModal}
        onCancel={() => setSowBidsModal(false)}
        centered
        width={1500}
        footer={null}
        className="Bids"
      >
        <div
          style={{ display: "flex", gap: "0.75rem", flexDirection: "column" }}
        >
          <h1>Bids</h1>
          <Divider />
          <h1
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.75rem",
              color: "#6B7280",
            }}
          >
            Product Name : {selectedProduct.name}
          </h1>

          <Table columns={columns} dataSource={bidsData} />
        </div>
      </Modal>
    </>
  );
};

export default Bids;
