import { Card, CardHeader, Col } from "reactstrap";
import GradienButtonsCardBody from "./GradienButtonsCardBody";
import { H5 } from "../../../AbstractElements";
import { add, gradienButtons } from "../../../Constant";

const GradienButtons = () => {
  return (
    <Col sm="12">
      <Card id="gradiant">
        <CardHeader>
          <H5>{gradienButtons}</H5>
          <span>
            {add}
            <code>.btn-*-gradien</code>class for gradien button
          </span>
        </CardHeader>
        <GradienButtonsCardBody />
      </Card>
    </Col>
  );
};
export default GradienButtons;
