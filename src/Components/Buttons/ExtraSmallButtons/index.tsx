import { Col, Card, CardHeader } from "reactstrap";
import ExtraSmallButtonsCardBody from "./ExtraSmallButtonsCardBody";
import { H5 } from "../../../AbstractElements";
import { add, SmallButtonsHeading } from "../../../Constant";

const ExtraSmallButtons = () => {
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
        <ExtraSmallButtonsCardBody />
      </Card>
    </Col>
  );
};
export default ExtraSmallButtons;