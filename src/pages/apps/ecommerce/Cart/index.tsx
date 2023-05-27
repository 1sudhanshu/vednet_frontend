import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import CartContainer from "../../../../Components/apps/ecommerce/Cart/index";

const Cart = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Cart" />
      <CartContainer />
    </div>
  );
};

export default Cart;
