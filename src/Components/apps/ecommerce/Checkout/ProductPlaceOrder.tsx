import { H2, LI, UL } from "../../../../AbstractElements";
import { Col } from "reactstrap";
import {ContinueShopping,Product,Total,} from "../../../../Constant";
import { useNavigate } from "react-router";
import {getallCardTotal} from "../../../../Service/Ecommerce.service";
import { Href } from "../../../../Constant/index";
import { useSelector } from "react-redux";
import { EcommerceRootState } from "../ReducerTypes";
import PaymentOptions from "./PaymentOptions";
import ShippingOptions from "./ShippingOptions";
import CartData from "./CartData";

const ProductPlaceOrder = () => {
  const Navigate = useNavigate();
  const { cart } = useSelector((state: EcommerceRootState) => state.CartReducer);

  const handleNavigate = () => Navigate(`${process.env.PUBLIC_URL}/app/ecommerce/product`);
  return (
    <Col xl="6" sm="12">
      <div className="checkout-details">
        <div className="order-box">
          <div className="title-box">
            <div className="checkbox-title">
              <H2>{Product}</H2>
              <span>{Total}</span>
            </div>
          </div>
          <CartData />
          <ShippingOptions/>
          <UL className="simple-list sub-total total">
            <LI>{Total}<span className="count">$ {getallCardTotal(cart)}</span></LI>
          </UL>
          <PaymentOptions/>
          <div className="mt-2 d-flex justify-content-between">
            <a href={Href} className="btn btn-primary text-white me-2 text-capitalize"
              onClick={(e) => { e.preventDefault(); handleNavigate();}}>{ContinueShopping}
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default ProductPlaceOrder;
