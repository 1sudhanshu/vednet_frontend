import { Input, Label } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import { Option1, Option2, Shipping, Subtotal } from "../../../../Constant";
import { getallCardTotal } from "../../../../Service/Ecommerce.service";
import { useSelector } from "react-redux";
import { EcommerceRootState } from "../ReducerTypes";

const ShippingOptions = () => {
  const { cart } = useSelector((state: EcommerceRootState) => state.CartReducer);

  return (
    <UL className="simple-list sub-total">
      <LI>{Subtotal} <span className="count">$ {getallCardTotal(cart)}</span></LI>
      <LI className="shipping-class">{Shipping}
        <div className="shopping-checkout-option">
          <Label className="d-block" htmlFor="chk-ani">
            <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
            {Option1}
          </Label>
          <Label className="d-block" htmlFor="chk-ani1">
            <Input className="checkbox_animated" id="chk-ani1" type="checkbox"/>
            {Option2}
          </Label>
        </div>
      </LI>
    </UL>
  );
};

export default ShippingOptions;
