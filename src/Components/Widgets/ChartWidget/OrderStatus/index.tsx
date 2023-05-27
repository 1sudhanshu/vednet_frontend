import { Card, Col } from "reactstrap";
import OrderStatusHeader from "./OrderStatusHeader";
import OrderStatusBody from "./OrderStatus";

const OrderStatus = () => {
  return (
    <Col xl="8" lg="12" className="box-col-6 xl-50">
      <Card>
        <OrderStatusHeader />
        <OrderStatusBody />
      </Card>
    </Col>
  );
};

export default OrderStatus;
