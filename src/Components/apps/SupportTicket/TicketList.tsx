import { Row, Col, Card, CardBody } from "reactstrap";
import CountUp from "react-countup";
import { H4, H6 } from "../../../AbstractElements";
import { TicketData } from "../../../Data/apps/SupportTicket";
import ProfitAndLoss from "./ProfitAndLoss";

const TicketList = () => {
  return (
    <Row>
      {TicketData.map((item, index) => (
        <Col xl="4" md="6" key={index}>
          <Card className="ecommerce-widget pro-gress">
            <CardBody className="support-ticket-font support-ticket-card">
              <Row>
                <Col xs="5">
                  <H6>{item.title}</H6>
                  <H4 className="total-num counter">
                    <CountUp end={item.num} className="text-dark" />
                  </H4>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase">
                <div className="progress">
                  <div className={item.class} style={{ width: "70%" }}></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
