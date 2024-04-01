import { Button, Upload, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/loadersSlice";
import { EditProduct, UploadProductImage } from "../../../../apicalls/products";

const Images = ({ selectedProduct, setShowProductForm, getData }) => {
  const [showPreview = false, setShowPreview] = useState(true);
  const [images = [], setImages] = useState(selectedProduct.images);
  const [file = null, setFile] = useState(null);
  const dispatch = useDispatch();

  const upload = async () => {
    try {
      dispatch(setLoader(true));
      //upload image to cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("productId", selectedProduct._id);
      const response = await UploadProductImage(formData);
      dispatch(setLoader(true));
      if (response.success) {
        message.success(response.message);
        setImages([...images, response.data]);
        setShowPreview(false);
        setFile(null);
        getData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const deleteImage = async (image) => {
    try {
      const updatedImagesArray = images.filter((img) => img !== image);
      const updatedProduct = { ...selectedProduct, images: updatedImagesArray };
      const response = await EditProduct(selectedProduct._id, updatedProduct);
      if (response.success) {
        message.success(response.message);
        setImages(updatedImagesArray);
        setFile(null);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(setLoader(true));
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1.25rem", marginBottom: "1.25rem" }}>
        {images.map((image) => {
          return (
            <div className="imgDownload">
              <img src={image} alt="" />
              <i
                className="ri-delete-bin-line"
                onClick={() => {
                  deleteImage(image);
                }}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          );
        })}
      </div>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={(info) => {
          setFile(info.file);
          setShowPreview(true);
        }}
        fileList={file ? [file] : []}
        showUploadList={showPreview}
      >
        <Button type="dashed">Télécharger Une Image</Button>
      </Upload>

      <div className="ImagesButton">
        <Button
          type="default"
          onClick={() => {
            setShowProductForm(false);
          }}
        >
          Annuler 
        </Button>

        <Button type="primary" onClick={upload} disabled={!file}>
        Télécharger
        </Button>
      </div>
    </>
  );
};

export default Images;
