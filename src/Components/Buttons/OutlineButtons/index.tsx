import { Col } from "react-bootstrap";
import { Card, CardHeader } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { add, outlineButtons } from "../../../Constant";
import OutlineButtonsCardBody from "./OutlineButtonsCardBody";

const OutlineButtons = () => {
  return (
    <Col sm="12">
      <Card id="outline-button">
        <CardHeader>
          <H5>{outlineButtons}</H5>
          <span>
            {add}
            <code>.btn-outline-*</code>class for border button
          </span>
        </CardHeader>
        <OutlineButtonsCardBody />
      </Card>
    </Col>
  );
};
export default OutlineButtons;
