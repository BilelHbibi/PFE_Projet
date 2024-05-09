import { Form, Input, Modal, message } from "antd";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import { PlaceNewBid } from "../../../apicalls/products";
import { AddNotification } from "../../../apicalls/notification";

const BidModal = ({ showBidModal, setShowBidModal, product, reloadData }) => {
  const { user } = useSelector((state) => state.users);
  const formRef = useRef(null);
  const rules = [{ required: true, message: "required" }];
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await PlaceNewBid({
        ...values,
        product: product._id,
        seller: product.seller._id,
        buyer: user._id,
      });
      dispatch(setLoader(false));
      if (response.success) {
        message.success("Offre ajoutée avec succès");

        //send notification to seller
        await AddNotification({
          title: "Une nouvelle offre a été placée",
          message: `Une nouvelle offre a été placée sur votre produit ${product.name} par ${user.name} pour ${values.bidAmount} DT`,
          user: product.seller._id,
          onClick: `/profile`,
          read: false,
        });
        reloadData();
        setShowBidModal(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(setLoader(false));
    }
  };
  return (
    <Modal
      onCancel={() => setShowBidModal(false)}
      open={showBidModal}
      centered
      width={600}
      onOk={() => formRef.current.submit()}
      okText="Valider"
      cancelText="Annuler"
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Nouvelle Offre
          </h1>

          <Form layout="vertical" ref={formRef} onFinish={onFinish}>
            <Form.Item
              label="Montant de l'offre"
              name="bidAmount"
              rules={rules}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Message" name="message" rules={rules}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Mobile" name="mobile" rules={rules}>
              <Input type="number" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default BidModal;
