import { Col, Row } from "reactstrap";

const SettingOneColumnWidthBody = () => {
  return (
    <Row>
      <Row>
        <Col>
          <span>1 of 3</span>
        </Col>
        <Col xs="6">
          <span>2 of 3 (wider)</span>
        </Col>
        <Col>
          <span> 3 of 3</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>1 of 3</span>
        </Col>
        <Col xs="5">
          <span> 2 of 3 (wider)</span>
        </Col>
        <Col>
          <span>3 of 3</span>
        </Col>
      </Row>
    </Row>
  );
};

export default SettingOneColumnWidthBody;
