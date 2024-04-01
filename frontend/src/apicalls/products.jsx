import { axiosInstance } from "./axiosInstance";

//add a new product
export const AddProduct = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/products/add-product",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//get all products
export const GetProducts = async (filters) => {
  try {
    const response = await axiosInstance.post(
      "/api/products/get-products",
      filters
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//edit  product
export const EditProduct = async (id, payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/products/edit-product/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//get a product by id
export const GetProductById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/api/products/get-product-by-id/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//delete  product
export const DeleteProduct = async (id, payload) => {
  try {
    const response = await axiosInstance.delete(
      `/api/products/delete-product/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//upload product image
export const UploadProductImage = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/products/upload-image-to-product",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//update product status
export const UpdateProductStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(
      `/api/products/update-product-status/${id}`,
      { status }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//place a  new bid
export const PlaceNewBid = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/bids/place-new-bid",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//get all bids
export const GetAllBids = async (filters) => {
  try {
    const response = await axiosInstance.post(
      "/api/bids/get-all-bids",
      filters
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Accept a bid
export const AcceptBid = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/api/bids/accept-bid/${payload.bidId}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const RejectBid = async (bidId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/bids/reject-and-delete-bid/${bidId}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const GetBidDetails = async (bidId) => {
  try {
    const response = await axiosInstance.get(`/api/bids/bid-details/${bidId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch bid details:", error);
    throw error;
  }
};
