import { useSelector } from "react-redux";
import { EcommerceRootState, cartType } from "../ReducerTypes";
import { LI, UL } from "../../../../AbstractElements";
import { getCartTotal } from "../../../../Service/Ecommerce.service";

const CartData = () => {
  const { cart } = useSelector((state: EcommerceRootState) => state.CartReducer);

  return (
    <UL className="simple-list qty">
      {cart &&
        cart.map((item: cartType) => (
          <LI key={item.id}>
            {item.name} x {item.qty}
            <span>${getCartTotal(item)}</span>
          </LI>
        ))}
    </UL>
  );
};

export default CartData;
