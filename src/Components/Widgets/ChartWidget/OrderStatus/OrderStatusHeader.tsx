import { CardHeader, Col, Row } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { ShoppingBag } from "react-feather";
import { orderStatus } from "../../../../Constant";

const OrderStatusHeader = () => {
  return (
    <CardHeader>
      <Row>
        <Col xs="9">
          <H5>{orderStatus}</H5>
        </Col>
        <Col xs="3" className="text-end">
          <ShoppingBag className="text-muted" />
        </Col>
      </Row>
    </CardHeader>
  );
};

export default OrderStatusHeader;
