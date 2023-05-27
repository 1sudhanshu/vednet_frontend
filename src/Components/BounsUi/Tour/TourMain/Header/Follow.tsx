import { Col, Row } from "reactstrap";

const Follow = () => {
  return (
    <div className="follow">
      <Row>
        <Col xs="6" className=" border-right">
          <div className="follow-num counter">25869</div>
          <span>Follower</span>
        </Col>
        <Col xs="6">
          <div className="follow-num counter">659887</div>
          <span>Following</span>
        </Col>
      </Row>
    </div>
  );
};

export default Follow;
