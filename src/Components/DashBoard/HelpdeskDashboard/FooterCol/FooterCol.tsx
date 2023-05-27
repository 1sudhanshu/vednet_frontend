import { Col, Row } from "reactstrap";
import AverageSpeed from "./AverageSpeed";
import AgentPerformancePoints from "./AgentPerformancePoints";
import CurrentTicket from "./CurrentTictket";
import OverAllRating from "./OverAllRating/OverAllRating";

const FooterCol = () => {
  return (
    <Col xl="8" className=" xl-100 box-col-12">
      <Row>
        <Col xl="6">
          <Row>
            <AverageSpeed />
            <OverAllRating />
          </Row>
        </Col>
        <AgentPerformancePoints />
        <CurrentTicket />
      </Row>
    </Col>
  );
};

export default FooterCol;
