import { Col, Input, Label, Row } from "reactstrap";
import { City, State, Zip } from "../../../../../Constant";

const BrowserDefaultFormRow2 = () => {
  return (
    <Row className="g-2">
      <Col md="6" className="mb-3">
        <Label className="mb-2">{City}</Label>
        <Input type="text" placeholder="City" required/>
      </Col>
      <Col md="3" className="mb-3">
        <Label className="mb-2">{State}</Label>
        <Input  type="text" placeholder="State" required/>
      </Col>
      <Col md="3" className="mb-3">
        <Label className="mb-2">{Zip}</Label>
        <Input  type="text" placeholder="Zip" required/>
      </Col>
    </Row>
  );
};

export default BrowserDefaultFormRow2;
