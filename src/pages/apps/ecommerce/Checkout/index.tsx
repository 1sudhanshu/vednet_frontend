import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import CheckoutContainer from '../../../../Components/apps/ecommerce/Checkout/index';

const Checkout = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Checkout" />
      <CheckoutContainer />
    </div>
  );
};

export default Checkout;
