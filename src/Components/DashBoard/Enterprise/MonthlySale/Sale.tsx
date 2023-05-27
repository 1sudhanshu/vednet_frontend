import { Card, Col } from "reactstrap";
import SaleBody from "./SaleBody";

const Sale = () => {
  return (
    <Col xl="12" md="6" className="box-col-6">
      <Card className=" card-with-border">
        <SaleBody />
      </Card>
    </Col>
  );
};

export default Sale;
