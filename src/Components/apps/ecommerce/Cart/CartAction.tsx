import { Link } from "react-router-dom";
import { Input, InputGroup } from 'reactstrap';
import { Btn, H6 } from "../../../../AbstractElements";
import {Apply,CheckOut,ContinueShopping,TotalPrice} from "../../../../Constant";
import { getallCardTotal } from "../../../../Service/Ecommerce.service";
import { useSelector } from 'react-redux';
import { EcommerceRootState } from "../ReducerTypes";

const CartAction = () => {
  const { cart } = useSelector((state: EcommerceRootState) => state.CartReducer);

  return (
    <>
      <tr>
        <td colSpan={4}>
          <InputGroup>
            <Input type="text" placeholder="Enter coupan code"/>
            <Btn color="primary" className="text-white">{Apply}</Btn>
          </InputGroup>
        </td>
        <td className="total-amount">
          <H6 className= "m-0 text-end" ><span className="f-w-600">{TotalPrice} :</span></H6>
        </td>
        <td><span>${getallCardTotal(cart)}</span></td>
      </tr>
      <tr>
        <td className="text-end" colSpan={5}><Link to={`${process.env.PUBLIC_URL}/ECommerce/Product`} className="btn btn-secondary cart-btn-transform">{ContinueShopping}</Link></td>
        <td><Link className="btn btn-success cart-btn-transform" to={`${process.env.PUBLIC_URL}/ECommerce/Checkout`}>{CheckOut}</Link></td>
      </tr>
    </>
  );
};

export default CartAction;
