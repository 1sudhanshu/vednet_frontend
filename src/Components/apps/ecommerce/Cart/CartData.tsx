import { CartTableHeader, Href } from "../../../../Constant";
import { Btn, Image } from "../../../../AbstractElements";
import EmptyCart from "./EmptyCart";
import { Table, Row, Input, InputGroup } from "reactstrap";
import { XCircle } from "react-feather";
import  { Fragment } from "react";
import CartAction from "./CartAction";
import { useSelector, useDispatch } from "react-redux";
import { EcommerceRootState, cartType } from "../ReducerTypes";
import { dynamicImage } from "../../../../Service";

const CartData = () => {
  const dispatch = useDispatch();
  const { symbol } = useSelector((state: EcommerceRootState) => state.ProductReducer);
  const { cart } = useSelector((state: EcommerceRootState) => state.CartReducer);
  const incrementQty = (product: cartType, quantity: number) => dispatch({type: "incrementQty",payload: { item: product, quantity: quantity },});
  const decrementQuantity = (id: number) => dispatch({ type: "decrementQty", payload: id });
  const removefromcart = (item: cartType) => {dispatch({ type: "removeFromCart", payload: item.id });};
  return (
    <Fragment>
      {cart && cart.length > 0 ? (
        <div>
          <Row>
            <div className="order-history table-responsive wishlist cart-items">
              <Table className="table-bordered">
                <thead>
                  <tr>{CartTableHeader.map((items, i) => (<th key={i}>{items}</th>))}</tr>
                </thead>
                <tbody style={{ borderTop: "none" }}>
                  {cart.map((item: cartType, i: number) => (
                      <tr key={i}>
                        <td>
                          <Image className="img-fluid img-40" src={dynamicImage(item.img)} alt="products"/>
                        </td>
                        <td>
                          <div className="product-name">{item.name}</div>
                        </td>
                        <td>{item.price}</td>
                        <td>
                          <fieldset className="qty-box">
                            <InputGroup className="bootstrap-touchspin">
                              <span className="input-group-prepend">
                                <Btn color= "primary" className="btn-square bootstrap-touchspin-down" onClick= {() => decrementQuantity(item.id)}><i className="fa fa-minus"></i></Btn>
                              </span>
                              <Input type="text" name="quantity" value={item.qty} readOnly={true} style={{ textAlign: "center" }}/>
                              <span className="input-group-append">
                                <Btn color= "primary" className="btn-square bootstrap-touchspin-up" onClick= {() => incrementQty(item, 1)}> <i className="fa fa-plus"></i></Btn>
                              </span>
                            </InputGroup>
                          </fieldset>
                        </td>
                        <td>
                          <a href={Href} onClick={() => removefromcart(item)}><XCircle /></a>
                        </td>
                        <td>{symbol}{item.price * item.qty}</td>
                      </tr>
                    )
                  )}
                  <CartAction  />
                </tbody>
              </Table>
            </div>
          </Row>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Fragment>
  );
};
export default CartData;
