import { Card, Col, CardHeader } from "reactstrap";
import { FirmActivityHeading } from "../../../../Constant";
import { H5 } from "../../../../AbstractElements";
import FirmActivityBody from "./FirmActivityBody";

const FirmActivity = () => {
  return (
    <Col xl="3" className="xl-100 box-col-6">
      <Card className=" card-with-border connection firm-activity">
        <CardHeader>
          <H5 className="d-inline-block">{FirmActivityHeading}</H5>
          <span className="pull-right mt-0">457</span>
        </CardHeader>
        <FirmActivityBody />
      </Card>
    </Col>
  );
};
export default FirmActivity;
