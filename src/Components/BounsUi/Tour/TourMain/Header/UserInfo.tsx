import { Col, Row } from "reactstrap";
import { H6 } from "../../../../../AbstractElements";
import Userdesignation from "./Userdesignation";

const UserInfo = () => {
  return (
    <Row className="step3">
      <Col sm="6" lg="4" className=" order-sm-1 order-xl-0">
        <Row>
          <Col md="6">
            <div className="ttl-info text-start">
              <H6>
                <i className="fa fa-envelope" />
                &nbsp;&nbsp;&nbsp;Email
              </H6>
              <span>Marekjecno@yahoo.com</span>
            </div>
          </Col>
          <Col md="6">
            <div className="ttl-info text-start ttl-sm-mb-0">
              <H6>
                <i className="fa fa-calendar" />
                &nbsp;&nbsp;&nbsp;BOD
              </H6>
              <span>02 January 1988</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Userdesignation />
    </Row>
  );
};

export default UserInfo;
