import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomePage = () => {
  return (
    <>
      <h1>Our Latest Products..</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
