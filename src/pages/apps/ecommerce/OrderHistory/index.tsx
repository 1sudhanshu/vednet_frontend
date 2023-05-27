import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import OrderHistoryContainer from "../../../../Components/apps/ecommerce/OrderHistory/index";

const OrderHistory = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Order History" />
      <OrderHistoryContainer />
    </div>
  );
};

export default OrderHistory;
