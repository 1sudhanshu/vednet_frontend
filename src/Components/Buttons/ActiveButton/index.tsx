import { Col, Card, CardHeader } from "reactstrap";
import ActiveButtonCardBody from "./ActiveButtonCardBody";
import { H5 } from "../../../AbstractElements";
import { ActiveButtons, Add } from "../../../Constant";

const ActiveButton = () => {
  return (
    <Col sm="12">
      <Card id="active-btn">
        <CardHeader>
          <H5>{ActiveButtons}</H5>
          <span>
            {Add}
            <code>.active</code>class for active Button
          </span>
        </CardHeader>
        <ActiveButtonCardBody />
      </Card>
    </Col>
  );
};
export default ActiveButton;
