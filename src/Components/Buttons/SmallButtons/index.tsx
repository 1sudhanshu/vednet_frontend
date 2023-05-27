import { Col, Card, CardHeader } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { add, SmallButtonsHeading } from "../../../Constant";
import SmallButtonsCardBody from "./SmallButtonsCardBody";

const SmallButtons = () => {
  return (
    <Col sm="12">
      <Card id="large-btn">
        <CardHeader>
          <H5>{SmallButtonsHeading}</H5>
          <span>
            {add}
            <code>.btn-sm</code>class for small size buttons class for small
            size buttons
          </span>
        </CardHeader>
        <SmallButtonsCardBody />
      </Card>
    </Col>
  );
};
export default SmallButtons;