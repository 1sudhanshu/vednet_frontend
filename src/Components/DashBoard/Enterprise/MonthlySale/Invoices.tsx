import { Card, CardBody, Col } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { InvoicesHeading } from "../../../../Constant";
import InvoicesBody from "./InvoicesBody";
const Invoices = () => {
  return (
    <Col xl="12" md="6" className="  box-col-6">
      <Card className=" card-with-border">
        <CardBody className=" revenue-project inovice-ul">
          <H6>{InvoicesHeading}</H6>
          <InvoicesBody />
        </CardBody>
      </Card>
    </Col>
  );
};
export default Invoices;
