import { Button, Upload, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/loadersSlice";
import { UploadProductImage } from "../../../../apicalls/products";

const Images = ({ selectedProduct, setShowProductForm, getData }) => {
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
        getData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  return (
    <>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={(info) => {
          setFile(info.file);
        }}
      >
        <div style={{ display: "flex", gap: "5" }}>
          {images.map((image) => {
            return (
              <div className="imgDownload">
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>

        <Button type="dashed">Upload Image</Button>
      </Upload>

      <div className="ImagesButton">
        <Button
          type="default"
          onClick={() => {
            setShowProductForm(false);
          }}
        >
          Cancel
        </Button>

        <Button type="primary" onClick={upload} disabled={!file}>
          Upload
        </Button>
      </div>
    </>
  );
};

export default Images;
