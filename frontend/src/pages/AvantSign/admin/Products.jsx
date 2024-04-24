import React, { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import { GetProducts, UpdateProductStatus } from "../../../apicalls/products";
import moment from "moment";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts(null);
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const onStatusUpdate = async (id, status) => {
    try {
      dispatch(setLoader(true));
      const response = await UpdateProductStatus(id, status);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Produit",
      dataIndex: "image",
      render: (text, record) => {
        return (
          <img
            src={record?.images?.length > 0 ? record.images[0] : ""}
            alt=""
            style={{
              width: "5rem",
              height: "5rem",
              objectFit: "cover",
              borderRadius: "0.375rem",
            }}
          />
        );
      },
    },
    {
      title: "Nom",
      dataIndex: "name",
    },
    {
      title: "Vendeur",
      dataIndex: "Seller",
      render: (text, record) => {
        return record.seller.name ;
      },
    },

    {
      title: "Prix",
      dataIndex: "price",
    },
    {
      title: "Catégorie",
      dataIndex: "category",
    },
    {
      title: "Etat",
      dataIndex: "etat",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        return record.status.toUpperCase();
      },
    },
    {
      title: "Temps D'Ajout",
      dataIndex: "createdAt",
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const { status, _id } = record;
        return (
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {status === "En Attente" && (
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  onStatusUpdate(_id, "Approuvé");
                }}
              >
                Approuver
              </span>
            )}

            {status === "En Attente" && (
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  onStatusUpdate(_id, "Rejeter");
                }}
              >
                Rejeter 
              </span>
            )}

            {status === "Approuvé" && (
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  onStatusUpdate(_id, "blocked");
                }}
              >
                Bloqué
              </span>
            )}

            {status === "blocked" && (
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  onStatusUpdate(_id, "Approuvé");
                }}
              >
                Débloqué
              </span>
            )}
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
      <Table columns={columns} dataSource={products} />
    </>
  );
};

export default Products;
