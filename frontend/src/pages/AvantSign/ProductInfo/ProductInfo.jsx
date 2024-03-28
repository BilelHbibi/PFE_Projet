import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBids, GetProductById } from "../../../apicalls/products";
import { setLoader } from "../../../redux/loadersSlice";
import { Button, message } from "antd";
import { useParams } from "react-router-dom";
import "../../../style/AvantSign/ProductInfo.css";
import Divider from "../../../components/ensemble/ProtectedPage/Divider";
import moment from "moment";
import BidModal from "./BidModal";

const ProductInfo = () => {
  const { user } = useSelector((state) => state.users);
  const [showAddNewBid, setShowAddNewBid] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProductById(id);
      dispatch(setLoader(false));
      if (response.success) {
        const bidsResponse = await GetAllBids({ product: id });
        setProduct({
          ...response.data,
          bids: bidsResponse.data,
        });
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {product && (
        <div className="ProductInfo">
          {/* images */}
          <div className="image">
            <img src={product.images[selectedImageIndex]} alt="" />

            <div className="images">
              {product.images.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt=""
                    className={selectedImageIndex == index ? "active" : ""}
                    onClick={() => {
                      setSelectedImageIndex(index);
                    }}
                  />
                );
              })}
            </div>

            <Divider />
            <div className="time">
              <h2>Added On</h2>
              <span>
                {moment(product.createdAt).format("MMM D , YYYY hh:mm A")}
              </span>
            </div>
          </div>

          {/* details */}
          <div className="content">
            <div>
              <h1>{product.name}</h1>
              <span>{product.description}</span>
            </div>

            <Divider />
            <div className="details">
              <h1>Product Details</h1>
              <div className="detail">
                <span>Price</span>
                <span>${product.price}</span>
              </div>
              <div className="detail">
                <span>Category</span>
                <span style={{ textTransform: "uppercase" }}>
                  {product.category}
                </span>
              </div>
              <div className="detail">
                <span>Bill Available</span>
                <span>{product.billAvailable ? "Yes" : "No"}</span>
              </div>
              <div className="detail">
                <span>Box Available</span>
                <span>{product.boxAvailable ? "Yes" : "No"}</span>
              </div>
              <div className="detail">
                <span>Accessories Available</span>
                <span>{product.accessoriesAvailable ? "Yes" : "No"}</span>
              </div>
              <div className="detail">
                <span>Warranty Available</span>
                <span>{product.warrantyAvailable ? "Yes" : "No"}</span>
              </div>
              <div className="detail">
                <span>Purchased Yeaars</span>
                <span>
                  {moment().subtract(product.age, "years").format("YYYY")}{" "}
                  ({product.age} years ago)
                </span>
              </div>
            </div>

            <Divider />
            <div className="details">
              <h1>Seller Details</h1>
              <div className="detail">
                <span>Name</span>
                <span>{product.seller.name}</span>
              </div>
              <div className="detail">
                <span>Email</span>
                <span>{product.seller.email}</span>
              </div>
            </div>

            <Divider />
            <div className="details">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <h1>Bids</h1>
                <Button
                  onClick={() => {
                    setShowAddNewBid(!showAddNewBid);
                  }}
                  disabled={user._id === product.seller._id ||user.role==="fournisseur" ||user.role==="admin"}
                >
                  New Bid
                </Button>
              </div>

              {product.showBidsOnProductPage &&
                product.bids.map((bid) => {
                  return (
                    <div className="bids">
                      <div>
                        <span>Name</span>
                        <span>{bid.buyer.name}</span>
                      </div>

                      <div>
                        <span>Bid Amount</span>
                        <span>${bid.bidAmount}</span>
                      </div>

                      <div>
                        <span>Bid Place On</span>
                        <span>
                          {moment(bid.createdAt).format("MMM D , YYYY hh:mm A")}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {showAddNewBid && (
        <BidModal
          product={product}
          reloadData={getData}
          showBidModal={showAddNewBid}
          setShowBidModal={setShowAddNewBid}
        />
      )}
    </>
  );
};

export default ProductInfo;
