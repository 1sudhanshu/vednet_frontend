import { Card, Col, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import TurnoverCardBody from "./TurnoverCardBody";
import { turnover } from "../../../../Constant";

const Turnover = () => {
  return (
    <Col md="5" className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H5>{turnover}</H5>
          </CardHeader>
          <TurnoverCardBody />
        </Card>
      </div>
    </Col>
  );
};

export default Turnover;
