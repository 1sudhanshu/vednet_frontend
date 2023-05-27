import { Card, CardBody, Col, Row } from "reactstrap";
import { newOrder } from "../../../../Constant";
import { H3 } from "../../../../AbstractElements";
import ProfitLoss from "./Profit&Loss";
import ProgressShowcase from "./ProgressShowcase";

const EcommerceWidget = () => {
  return (
    <Card className=" xl-none">
      <CardBody className="ecommerce-widget widget-order">
        <Row>
          <Col xs="6">
            <span>{newOrder}</span>
            <H3 className="total-num counter">25639</H3>
          </Col>
          <ProfitLoss />
        </Row>
        <ProgressShowcase />
      </CardBody>
    </Card>
  );
};

export default EcommerceWidget;
