import React from "react";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProducts();
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, id) => (
          <Col key={id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} id={id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
