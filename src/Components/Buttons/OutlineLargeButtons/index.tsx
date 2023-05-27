import { Col } from "react-bootstrap";
import { Card, CardHeader } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { add, outlineLargeButtons } from "../../../Constant/index";
import OutlineLargeButtonsCardBody from "./OutlineLargeButtonsCardBody";
const OutlineLargeButtons = () => {
  return (
    <Col sm="12">
      <Card id="outline-bold-button">
        <CardHeader>
          <H5>{outlineLargeButtons}</H5>
          <span>
            {add}
            <code>.btn-outline-*</code>class for outline and{" "}
            <code>.btn-lg</code>class for large button
          </span>
        </CardHeader>
        <OutlineLargeButtonsCardBody />
      </Card>
    </Col>
  );
};
export default OutlineLargeButtons;
