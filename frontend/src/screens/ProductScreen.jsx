import { useParams } from "react-router-dom";
// import products from "../products";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  // const productId = 1;
  console.log(productId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`http://localhost:5000/api/products/${productId}`);
        const response = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        );
        console.log("Response:", response);
        setProduct(response.data); // Corrected: Extract 'data' from response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false); // Added setLoading(false) for error case as well
      }
    };

    fetchProduct();
  }, [productId]);

  //   const fetchProduct = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/${productId}`);
  //       setProduct(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [productId]);

  if (loading) {
    console.log("Loading product...");
    return <Spinner animation="border" />;
  }

  // const [product, setProduct] = useState({});
  // const { id: productId } = useParams();
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${productId}`);
  //     setProduct(data);
  //   };
  //   fetchProduct();
  // }, [productId]);

  // const [product, setProduct] = useState({});
  // const { id: productId } = useParams();

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/${productId}`);
  //       setProduct(data);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [productId]);

  // let { id } = useParams();
  // id = Number(id);
  // const product = products.find((p, index) => {
  //   console.log("index: ", index);
  //   console.log(index === id);
  //   if (index === id) {
  //     return true;
  //   }
  //   return false;
  // });
  // console.log("product: ", product);
  console.log("Rendering product details:", product);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Qty Select */}
              {/* {products.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(products.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )} */}

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                  // onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
