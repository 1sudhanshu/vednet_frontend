import { Card, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { add, outlineSmallButtons } from "../../../Constant";
import OutlineSmallButtonsCardBody from "./OutlineSmallButtonsCardBody";

const OutlineSmallButtons = () => {
  return (
    <Col sm="12">
      <Card id="outline-bold-button">
        <CardHeader>
          <H5>{outlineSmallButtons}</H5>
          <span>
            {add}
            <code>.btn-outline-*</code>class for outline and{" "}
            <code>.btn-sm</code>class for small button
          </span>
        </CardHeader>
        <OutlineSmallButtonsCardBody />
      </Card>
    </Col>
  );
};
export default OutlineSmallButtons;
