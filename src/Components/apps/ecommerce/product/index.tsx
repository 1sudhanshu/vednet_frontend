import { useEffect } from "react";
import { Container } from "reactstrap";
import ProductFeatures from "./ProductFeatures";
import ProductGrid from "./ProductGrid";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ProductsApi } from "../../../../api";
import { EcommerceRootState } from "../ReducerTypes";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const {sideBarOn } = useSelector((state:EcommerceRootState) => state.FilterReducer);

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
    <Container fluid={true} className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
      <div className="product-grid">
        <ProductFeatures />
        <ProductGrid />
      </div>
    </Container>
  );
};

export default ProductContainer;
