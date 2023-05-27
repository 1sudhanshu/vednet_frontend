import { Row } from "reactstrap";
import { Col } from "react-bootstrap";

interface propsType {
  RowClass?: string;
}
const CommonRow = (props: propsType) => {
  return (
    <Row className={props.RowClass}>
      <Col xs="4" className="u-pearl done ">
        <span className="u-pearl-number">1</span>
        <span className="u-pearl-title">Account Info</span>
      </Col>
      <Col xs="4" className="u-pearl current ">
        <span className="u-pearl-number">2</span>
        <span className="u-pearl-title">Billing Info</span>
      </Col>
      <Col xs="4" className="u-pearl ">
        <span className="u-pearl-number">3</span>
        <span className="u-pearl-title">Confirmation</span>
      </Col>
    </Row>
  );
};

export default CommonRow;
