import { Card, Col } from "reactstrap";
import CustomerSatisfactionHeader from "./CustomerSatisfactionHeader";
import CustomerSatisfactionBody from "./CustomerSatisfactionBody";

const CustomerSatisfaction = () => {
  return (
    <Col xl="4" className=" xl-50 box-col-6">
      <Card className=" card-with-border customer-satisfied">
        <CustomerSatisfactionHeader />
        <CustomerSatisfactionBody />
      </Card>
    </Col>
  );
};

export default CustomerSatisfaction;
