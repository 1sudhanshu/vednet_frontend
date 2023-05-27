import { Col, Card, CardHeader } from "reactstrap";
import { add, LargeButtonsHeading } from "../../../Constant";
import LargeButtonsCardBody from "./LargeButtonsCardBody";
import { H5 } from "../../../AbstractElements";

const LargeButtons = () => {
  return (
    <Col sm="12">
      <Card id="large-btn">
        <CardHeader>
          <H5>{LargeButtonsHeading}</H5>
          <span>
            {add}
            <code>.btn-lg</code>class for large size buttons class for large
            size buttons
          </span>
        </CardHeader>
        <LargeButtonsCardBody />
      </Card>
    </Col>
  );
};
export default LargeButtons;
