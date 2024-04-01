import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../../../apicalls/products";
import { setLoader } from "../../../redux/loadersSlice";
import { message } from "antd";
import "../../../style/AvantSign/client.css";
import Divider from "../../../components/ensemble/ProtectedPage/Divider";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
import moment from "moment";

const Client = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "Approuvé",
    category: [],
    age: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts(filters);
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);

  // Filter products based on search term matching the start of the product name
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="client">
        {showFilters && (
          <Filters
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            width: "100%",
            margin: "0 20px",
          }}
        >
          <div
            style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
          >
            {!showFilters && (
              <i
                className="ri-equalizer-line"
                onClick={() => setShowFilters(!showFilters)}
              ></i>
            )}
            <input
              type="text"
              placeholder="Search products here ..."
              className={`search ${showFilters ? "search4" : "search5"}`}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={`content ${showFilters ? "grid4" : "grid5"}`}>
            {filteredProducts.map((product) => {
              return (
                <div
                  className="card"
                  key={product._id}
                  onClick={() => {
                    navigate(`/product/${product._id}`);
                  }}
                >
                  <img src={product.images[0]} alt="" />

                  <div className="content">
                    <h1>{product.name}</h1>
                    <p>
                      {product.age}
                      {product.age === 1 ? " ans" : " ans"}{" "}
                    </p>
                    <Divider />
                    <span>$ {product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
