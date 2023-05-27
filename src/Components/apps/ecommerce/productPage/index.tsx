import { Card, Col, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSilder";
import ClothsDetails from "./ClothsDetails";
import ProductDetails from "./ProductDetails";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ProductsApi } from "../../../../api";
import { useEffect } from "react";

const ProductPageContainer = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      await axios.get(ProductsApi).then((resp) => {
        dispatch({ type: "setProductItem", payload: resp.data });
      });
    } catch (error) {
      console.log('cancelled', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container fluid={true}>
      <Card>
        <Row className="product-page-main">
          <Col xl="3">
            <ImageSlider />
          </Col>
          <Col xl="9">
            <ProductDetails />
          </Col>
        </Row>
      </Card>
      <Card>
        <Row className="product-page-main">
          <Col sm="12">
            <ClothsDetails />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductPageContainer;
