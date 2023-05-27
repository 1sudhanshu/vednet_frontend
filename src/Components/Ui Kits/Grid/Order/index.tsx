import { Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import OrderCardBody from "./OrderCardBody";

const Order = () => {
  return (
    <Card>
      <HeadingCommon Heading="Order" />
      <OrderCardBody />
    </Card>
  );
};

export default Order;
