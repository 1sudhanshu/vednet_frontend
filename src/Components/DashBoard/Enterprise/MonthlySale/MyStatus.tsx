import { Card, Col, CardHeader, CardBody } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { MyStatusHeading } from "../../../../Constant";
import MyStatusBody from "./MyStatusBody";

const MyStatus = () => {
  return (
    <Col xl="12" className=" box-col-12">
      <Card className=" card-with-border">
        <CardHeader>
          <H6 className="mb-0">{MyStatusHeading}</H6>
        </CardHeader>
        <CardBody className=" p-0 my-status">
          <MyStatusBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyStatus;
