import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { H5, H6, LI, UL } from "../../../../AbstractElements";
import { datas } from "../../../../Data/DashBoard/BusinessDashboard/SalesReport";
const SalesReport = () => {
  return (
    <CardFooter className=" p-0">
      <Row className=" growth-revenue-footer">
        {datas.map((data, index) => (
          <Col xs="6" key={index}>
            <Card className="ecommerce-widget mb-0">
              <CardBody
                className={`support-ticket-font ${data.cardBodyClassName}`}
              >
                <div className="d-flex">
                  <div className="data-left-ticket">
                    <span className="f-12">{data.Heading}</span>
                    <H5 className="total-num">
                      <span className="me-1">$</span>
                      <span className="counter"> {data.amount}</span>
                    </H5>
                  </div>
                  <div className="data-right-ticket">
                    <div className="text-md-end">
                      <UL className="simple-list">
                        <LI>
                          <span className="f-12">{data.firstLi}</span>
                        </LI>
                        <LI>
                          <H6 className="mb-0">{data.secondLi}</H6>
                        </LI>
                      </UL>
                    </div>
                  </div>
                </div>
                <div className="progress-showcase">
                  <div className="progress sm-progress-bar">
                    <div
                      className={`progress-bar ${data.ProgressBarColor}`}
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardFooter>
  );
};
export default SalesReport;
