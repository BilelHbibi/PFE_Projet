import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Table, message, Button } from "antd";
import moment from "moment";
import { setLoader } from "../../../../redux/loadersSlice";
import { jsPDF } from "jspdf";

import {
  GetAllBids,
  AcceptBid,
  rejectBid,
  GetBidDetails,
  RejectBid,
} from "../../../../apicalls/products";
import Divider from "../../../../components/ensemble/ProtectedPage/Divider";
import { AddNotification } from "../../../../apicalls/notification";
import PDFGenerator from "../../../../components/ensemble/PDF/PDFGenerator ";
import Notifications from "../../../../components/ensemble/ProtectedPage/Notifications";

const Bids = ({ showBidsModal, setShowBidsModal, selectedProduct }) => {
  const [bidsData, setBidsData] = useState([]);
  const dispatch = useDispatch();
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedBidDetails, setSelectedBidDetails] = useState(null);

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllBids({ product: selectedProduct._id });
      dispatch(setLoader(false));
      if (response.success) {
        const formattedData = response.data.map((bid) => ({
          ...bid,
          key: bid._id,
        }));
        setBidsData(formattedData);
      } else {
        throw new Error(response.message || "Failed to fetch bids");
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.toString());
    }
  };

  const handleAcceptBid = async (bidId) => {
    try {
      dispatch(setLoader(true));
      // Fetch bid details before attempting to accept the bid
      const bidDetailsResponse = await GetBidDetails(bidId);
      if (!bidDetailsResponse.success) {
        throw new Error(
          bidDetailsResponse.message || "Failed to fetch bid details"
        );
      }
      const bidDetails = bidDetailsResponse.data;
      setSelectedNotification({
        title: "Offre acceptée",
        message: `Your bid on ${bidDetails.productName} for ${bidDetails.bidAmount} DT has been accepted.`,
        buyerName: bidDetails.buyer.name,
        bidAmount: bidDetails.bidAmount,
        sellerName: bidDetails.seller.name,
        createAt: bidDetails.createAt,
      });

      // Proceed to accept the bid
      const acceptResponse = await AcceptBid({ bidId });
      if (acceptResponse.success) {
        message.success("Bid accepted successfully.");

        // Send notification with the fetched bid details
        await AddNotification({
          title: "Offre acceptée",
          message: `Votre offre sur ${bidDetails.product.name} pour ${bidDetails.bidAmount} DT a été acceptée. Cliquez ici pour télécharger le contrat`,
          user: bidDetails.buyer._id,
          onClick: false,
          read: false,
          data: {
            // Ensure this structure matches what you expect in your PDF generation logic
            bidId: bidDetails._id,
            productName: bidDetails.product.name,
            bidAmount: bidDetails.bidAmount,
            buyerName: bidDetails.buyer.name,
            sellerName: bidDetails.seller.name,
            createAt: bidDetails.createAt,
          },
        });

        setSelectedBidDetails({
          bidId: bidId,
          buyerName: bidDetails.buyer.name,
          bidAmount: bidDetails.bidAmount,
          sellerName: bidDetails.seller.name,
          createAt: bidDetails.createAt,
        });
        // Update the local state to reflect the bid acceptance
        setBidsData(
          bidsData.map((bid) =>
            bid._id === bidId ? { ...bid, status: "accepted" } : bid
          )
        );
      } else {
        throw new Error(acceptResponse.message || "Failed to accept bid");
      }
    } catch (error) {
      message.error(error.toString());
    } finally {
      dispatch(setLoader(false));
    }
  };

  const handleRejectBid = async (bidId) => {
    try {
      dispatch(setLoader(true));
      // Pas besoin de récupérer les détails de l'offre pour le rejet, sauf si vous souhaitez les utiliser dans la notification
      const bidDetailsResponse = await GetBidDetails(bidId);
      if (!bidDetailsResponse.success) {
        throw new Error(
          bidDetailsResponse.message || "Failed to fetch bid details"
        );
      }
      const bidDetails = bidDetailsResponse.data;

      // Procéder au rejet de l'offre
      const rejectResponse = await RejectBid(bidId);
      if (!rejectResponse.success) {
        throw new Error(rejectResponse.message || "i cant reject bid");
      }
      if (rejectResponse.success) {
        message.success("Bid rejected successfully.");

        // Envoyer une notification avec les détails de l'offre récupérés
        await AddNotification({
          title: "Bid Rejected",
          message: `Your bid on ${bidDetails.product.name} for ${bidDetails.bidAmount} DT has been rejected.`,
          user: bidDetails.buyer._id,
          onClick: `/profile/${bidDetails.buyer._id}`, // Ajustez si nécessaire
          read: false,
        });

        // Mettre à jour l'état local pour refléter le rejet de l'offre
        setBidsData(bidsData.filter((bid) => bid._id !== bidId));
      } else {
        throw new Error(rejectResponse.message || "Failed to reject bid");
      }
    } catch (error) {
      message.error(
        error.message || "An error occurred while trying to reject the bid."
      );
    } finally {
      dispatch(setLoader(false));
    }
  };

  const columns = [
    {
      title: "Date de l'Offre",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD-MM-YYYY hh:mm a");
      },
    },
    {
      title: "Nom",
      dataIndex: "name",
      render: (text, record) => {
        return record.buyer.name;
      },
    },
    {
      title: "Montant de l'offre",
      dataIndex: "bidAmount",
    },

    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Détails de contact",
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
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        if (record.status === "accepted") {
          return (
            <button className="acceptDisabled" disabled>
              Accepté
            </button>
          );
        } else {
          return (
            <div className="AcceptReject">
              <button
                onClick={() => handleAcceptBid(record._id)}
                style={{ marginRight: 8 }}
              >
                Accepter
              </button>
              <button onClick={() => handleRejectBid(record._id)}>
                Refuser
              </button>
            </div>
          );
        }
      },
    },

    // continue with other elements as needed
  ];

  useEffect(() => {
    if (selectedProduct) {
      getData();
    }
  }, [selectedProduct]);

  return (
    <Modal
      title="Les Offre"
      open={showBidsModal}
      onCancel={() => setShowBidsModal(false)}
      centered
      width={1500}
      footer={null}
      className="Bids"
    >
      <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column" }}>
        <Divider />
        <h1
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            color: "#6B7280",
          }}
        >
          Nom de Produit: {selectedProduct.name}
        </h1>

        <Table columns={columns} dataSource={bidsData} />
      </div>
    </Modal>
  );
};

export default Bids;
