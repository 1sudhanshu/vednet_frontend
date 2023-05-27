import { Card, CardBody, Col } from "reactstrap";
import TotalProductsHeading from "./TotalProductsHeading";
import TotalProductsBody from "./TotalProductsBody";

const TotalProducts = () => {
  return (
    <Col xl="3" md="6" className=" xl-50 box-col-6">
      <Card className=" card-with-border">
        <CardBody>
          <TotalProductsHeading />
          <TotalProductsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalProducts;
