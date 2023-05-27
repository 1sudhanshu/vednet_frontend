import { Card, CardHeader, Col } from "reactstrap";
import DisabledButtonsBody from "./DisabledButtons";
import { H5 } from "../../../AbstractElements";
import { add, disabledOutlineButtons } from "../../../Constant";
const DisabledOutlineButtons = () => {
  return (
    <Col sm="12">
      <Card id="ex-outline-small-button">
        <CardHeader>
          <H5>{disabledOutlineButtons}</H5>
          <span>
            {add}
            <code>.disabled</code>class or
            <code>disabled='disabled'</code>attribute for disabled state{" "}
          </span>
        </CardHeader>
        <DisabledButtonsBody />
      </Card>
    </Col>
  );
};
export default DisabledOutlineButtons;
