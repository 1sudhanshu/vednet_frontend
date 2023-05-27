import { Col, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { FirstName, LastName, Username } from "../../../../../Constant";

const BrowserDefaultFormRow1 = () => {
  return (
    <Row className="g-2">
      <Col md="4" className="mb-3">
        <Label className="mb-2">{FirstName}</Label>
        <Input type="text" placeholder="First name" required/>
      </Col>
      <Col md="4" className="mb-3">
        <Label className="mb-2">{LastName}</Label>
        <Input type="text" placeholder="Last name" required/>
      </Col>
      <Col md="4" className="mb-3">
        <Label className="mb-2">{Username}</Label>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input type="text" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default BrowserDefaultFormRow1;
