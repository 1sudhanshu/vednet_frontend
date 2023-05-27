import { Col, Row } from "reactstrap";
import { H6 } from "../../../../../AbstractElements";

const MarkJecnoDeatails = () => {
  return (
    <Col sm="6" lg="4" className=" order-sm-2 order-xl-2">
      <Row>
        <Col md="6">
          <div className="ttl-info text-start ttl-xs-mt">
            <H6>
              <i className="fa fa-phone" />
              &nbsp;&nbsp;&nbsp;Contact Us
            </H6>
            <span>India +91 123-456-7890</span>
          </div>
        </Col>
        <Col md="6">
          <div className="ttl-info text-start ttl-sm-mb-0">
            <H6>
              <i className="fa fa-location-arrow" />
              &nbsp;&nbsp;&nbsp;Location
            </H6>
            <span>B69 Near Schoool Demo</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MarkJecnoDeatails;
