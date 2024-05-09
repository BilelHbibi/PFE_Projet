import { Col, Form, Input, Modal, Row, Tabs, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct, EditProduct } from "../../../../apicalls/products";
import { setLoader } from "../../../../redux/loadersSlice.js";
import Images from "./Images.jsx";
import { AddNotification } from "../../../../apicalls/notification.jsx";

const additionalThings = [
  {
    label: "Facture Disponible",
    name: "billAvailable",
  },
  {
    label: "Garantie Disponible",
    name: "warrantyAvailable",
  },
  {
    label: "Accessoires Disponibles",
    name: "accessoriesAvailable",
  },
  {
    label: "Boîte Disponible",
    name: "boxAvailable",
  },
];
const rules = [
  {
    required: true,
    message: "required",
  },
];

const ProductsForm = ({
  showProductForm,
  setShowProductForm,
  selectedProduct,
  getData,
}) => {
  const [selectedTab = "1", setSelectedTab] = useState("1");
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      let response = null;
      if (selectedProduct) {
        response = await EditProduct(selectedProduct._id, values);
      } else {
        values.seller = user._id;
        values.status = "En Attente";
        response = await AddProduct(values);
      }
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
        setShowProductForm(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  });

  return (
    <>
      <Modal
        title=""
        visible={showProductForm}
        onCancel={() => setShowProductForm(false)}
        centered
        width={1000}
        className="Modal"
        okText="Sauvegarder"
        cancelText="Annuler"
        
        onOk={() => {
          formRef.current.submit();
        }}
        {...(selectedTab === "2" && { footer: false })}
      >
        <div>
          <h1
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "600",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {selectedProduct ? "Modifier le Produit" : "Ajouter un Produit"}
          </h1>
          <Tabs
            defaultActiveKey="1"
            activeKey={selectedTab}
            onChange={(key) => setSelectedTab(key)}
          >
            <Tabs.TabPane tab="général" key="1">
              <Form layout="vertical" ref={formRef} onFinish={onFinish}>
                <Form.Item label="Nom" name="name" rules={rules}>
                  <Input type="text" />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={rules}>
                  <TextArea type="text" rows={"3"}/>
                </Form.Item>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Form.Item label="Prix" name="price" rules={rules}>
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="etats" name="etat" rules={rules}>
                    <select>
                        <option value="">Select</option>
                        <option value="occasion">occasion </option>
                        <option value="neuf">neuf</option>
                      </select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Catégorie" name="category" rules={rules}>
                      <select>
                        <option value="">Select</option>
                        <option value="electronique">Electronique</option>
                        <option value="alimentation">Alimentation</option>
                        <option value="maison">Maison</option>
                        <option value="sports">Sports</option>
                        <option value="sante">Santé</option>
                        <option value="art-collectibles">
                          Art & Collectibles
                        </option>
                      </select>
                    </Form.Item>
                  </Col>
                </Row>
                <div className="check">
                  {additionalThings.map((item) => (
                    <Form.Item
                      label={item.label}
                      name={item.name}
                      valuePropName="checked"
                    >
                      <Input
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => {
                          formRef.current.setFieldsValue({
                            [item.name]: e.target.checked,
                          });
                        }}
                        checked={formRef.current?.getFieldValue(item.name)}
                      />
                    </Form.Item>
                  ))}
                </div>

                <Form.Item
                  label="Afficher Offres Produit"
                  name="showBidsOnProductPage"
                  valuePropName="checked"
                  style={{marginTop:"8px"}}
                >
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      formRef.current.setFieldsValue({
                        showBidsOnProductPage: e.target.checked,
                      });
                    }}
                    checked={formRef.current?.getFieldValue(
                      "showBidsOnProductPage"
                    )}
                    style={{ width: 50, marginLeft: 20 }}
                  />
                </Form.Item>
              </Form>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Images" key="2" disabled={!selectedProduct}>
              <Images
                selectedProduct={selectedProduct}
                getData={getData}
                setShowProductForm={setShowProductForm}
              />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Modal>
    </>
  );
};

export default ProductsForm;
