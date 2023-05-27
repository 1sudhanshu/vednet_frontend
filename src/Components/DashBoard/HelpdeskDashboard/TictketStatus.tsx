import { Card, Col, Row } from "reactstrap";
import { TictketStatusdatas } from "../../../Data/Components/HelpdeskDashBoard/TictketStatus";
import { H6 } from "../../../AbstractElements";
import { Fragment } from "react";

const TictketStatus = () => {
  return (
    <Fragment>
      {TictketStatusdatas.map((data, index) => (
        <Col md="6" xl="3" lg="6" className="xl-50  box-col-6" key={index}>
          <Card className=" social-widget-card">
            <div className="p-15">
              <div className="d-flex b-b-light">
                <div className="media-left me-4">
                  <div className={`redial-social-widget ${data.redialClass}`}>
                    {data.redialIcon}
                  </div>
                </div>
                <div className="media-right">
                  <h5>{data.tittle}</h5>
                  <p>{data.paragraph}</p>
                </div>
              </div>
              <Row>
                <Col className=" text-center b-r-light">
                  <span>Today</span>
                  <H6 className="counter mb-0">{data.today}</H6>
                </Col>
                <Col className=" text-center b-r-light">
                  <span>last Month</span>
                  <H6 className="counter mb-0">{data.lastMonth}</H6>
                </Col>
                <Col className=" text-center">
                  <span>Total</span>
                  <H6 className="counter mb-0">
                    {data.today + data.lastMonth}
                  </H6>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default TictketStatus;
