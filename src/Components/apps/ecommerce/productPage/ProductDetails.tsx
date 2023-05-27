import { Fragment } from "react";
import {  P } from "../../../../AbstractElements";
import { AddToCart, AddToWishList, ProductDetail } from "../../../../Constant";
import StarRatings from "./StarRating";
import { Link, useParams } from "react-router-dom";
import ColorSelector from "./ColorSelector";
import { useSelector, useDispatch } from "react-redux";
import { EcommerceRootState } from "../ReducerTypes";
import ProductTable from "./ProductTable";

const ProductDetails = () => {
  const id = useParams();
  const { productItem } = useSelector(
    (state: EcommerceRootState) => state.ProductReducer
  );
  const dispatch = useDispatch();
  const singleItem = productItem;
  const AddProduct = (id: string | undefined | number) => {
    singleItem.map((item) => {
      if (item.id === id) {
        dispatch({ type: "addToCart", payload: { item: item, quantity: 1 } });
      }
    });
  };
  
  return (
    <Fragment>
      <StarRatings />
      <P>{ProductDetail}</P>
      <div className="product-price digits">
        <del>$350.00 </del>$26.00
      </div>
      <hr />
      <ProductTable />
      <hr />
      <ColorSelector />
      <div className="m-t-15">
        <Link
          className="btn btn-primary"
          to={`${process.env.PUBLIC_URL}/ECommerce/Cart`}
          onClick={() => {
            AddProduct(id.id);
          }}
        >
          {AddToCart}
        </Link>
        <Link
          className="btn mx-2  btn-danger"
          to={`${process.env.PUBLIC_URL}/ECommerce/Wishlist`}
        >
          {AddToWishList}
        </Link>
      </div>
    </Fragment>
  );
};
export default ProductDetails;
