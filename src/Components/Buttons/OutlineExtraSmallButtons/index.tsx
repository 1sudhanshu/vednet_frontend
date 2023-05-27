import { Col, Card, CardHeader } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { add, outlineExtraSmallButtons } from "../../../Constant";
import SmallButtonsCardBody from "./SmallButtonsCardBody";
const OutlineExtraSmallButtons = () => {
  return (
    <Col sm="12">
      <Card id="ex-outline-small-button">
        <CardHeader>
          <H5>{outlineExtraSmallButtons}</H5>
          <span>
            {add}
            <code>.btn-outline-*</code>class for outline and{" "}
            <code>.btn-xs</code>class for extra small button
          </span>
        </CardHeader>
        <SmallButtonsCardBody />
      </Card>
    </Col>
  );
};
export default OutlineExtraSmallButtons;
