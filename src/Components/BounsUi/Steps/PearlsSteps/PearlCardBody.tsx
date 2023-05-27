import { CardBody, Row, Col } from "reactstrap";

const PearlCardBody = () => {
  return (
    <CardBody>
      <Row>
        <Col xs="4" className="u-pearl done">
          <div className="u-pearl-icon">
            <i className="icon-shopping-cart" aria-hidden="true"></i>
          </div>
          <span className="u-pearl-title">Account Info</span>
        </Col>
        <Col xs="4" className="u-pearl current ">
          <div className="u-pearl-icon">
            <i className="icon-write" aria-hidden="true"></i>
          </div>
          <span className="u-pearl-title">Billing Info</span>
        </Col>
        <Col xs="4" className="u-pearl ">
          <div className="u-pearl-icon">
            <i className="icon-check" aria-hidden="true"></i>
          </div>
          <span className="u-pearl-title">Confirmation</span>
        </Col>
      </Row>
    </CardBody>
  );
};

export default PearlCardBody;
