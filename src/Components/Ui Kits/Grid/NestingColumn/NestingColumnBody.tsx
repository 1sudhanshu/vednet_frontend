import { CardBody, Col, Row } from "reactstrap";
import { P } from "../../../../AbstractElements";

const NestingColumnBody = () => {
  return (
    <CardBody className="grid-showcase">
      <P>Use flexbox alignment utilities to vertically and horizontally align columns.</P>
      <Row>
        <Col sm="9">
          <span>Level 1: .col-sm-9</span>
          <Row>
            <Col sm="6" xs="8">
              <span>Level 2: .col-8 .col-sm-6</span>
            </Col>
            <Col sm="6" xs="4">
              <span>Level 2: .col-4 .col-sm-6</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  );
};

export default NestingColumnBody;
