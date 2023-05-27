import { Row } from "reactstrap";
import { Col } from "react-bootstrap";
interface PropsType {
  RowClass: string;
}
const CommonRow = (props: PropsType) => {
  return (
    <Row className={`u-steps ${props.RowClass} `}>
      <Col md="4" className="u-step">
        <span
          className="u-step-icon icon wb-shopping-cart"
          aria-hidden="true"
        ></span>
        <div className="u-step-desc">
          <span className="u-step-title">Shopping</span>
        </div>
      </Col>
      <Col md="4" className="u-step current">
        <span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
        <div className="u-step-desc">
          <span className="u-step-title">Billing</span>
        </div>
      </Col>
      <Col md="4" className="u-step">
        <span className="u-step-icon icon wb-time" aria-hidden="true"></span>
        <div className="u-step-desc">
          <span className="u-step-title">Getting</span>
        </div>
      </Col>
    </Row>
  );
};

export default CommonRow;
