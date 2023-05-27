import { Col, Card, CardHeader } from "reactstrap";
import DisabledButtonsCardBody from "./DisabledButtonsCardBody";
import { H5 } from "../../../AbstractElements";
import { add, disabledButtons } from "../../../Constant";

const DisabledButtons = () => {
  return (
    <Col sm="12">
      <Card id="disabled-btn">
        <CardHeader>
          <H5>{disabledButtons}</H5>
          <span>
            {add}
            <code>.disabled class or disabled='disabled'</code>attribute for
            disabled button
          </span>
        </CardHeader>
        <DisabledButtonsCardBody />
      </Card>
    </Col>
  );
};
export default DisabledButtons;
