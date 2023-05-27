import { Row, Col } from "reactstrap";
interface propsTypes {
  div1: string;
  div2: string;
  div3: string;

}
const CommonRow = (props: propsTypes) => {
  return (
    <Row className="mb-5">
      <Col xs="4" className={` u-pearl ${props.div1}`}>
        <div className="u-pearl-icon">1</div>
        <span className="u-pearl-title">Account Info</span>
      </Col>
      <Col xs="4" className={` u-pearl ${props.div2}`}>
        <div className="u-pearl-icon">2</div>
        <span className="u-pearl-title">Billing Info</span>
      </Col>
      <Col xs="4" className={` u-pearl ${props.div3}`}>
        <div className="u-pearl-icon">3</div>
        <span className="u-pearl-title">Confirmation</span>
      </Col>
    </Row>
  );
};

export default CommonRow;
