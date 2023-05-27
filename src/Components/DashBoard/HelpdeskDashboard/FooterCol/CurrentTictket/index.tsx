import { Card, Col } from "reactstrap";
import CurrentTicketHeader from "./CurrentTicketHeader";
import CurrentTicketBody from "./CurrentTicketBody";

const CurrentTicket = () => {
  return (
    <Col sm="12">
      <Card className="card-with-border current-tickets tickets">
        <CurrentTicketHeader />
        <CurrentTicketBody />
      </Card>
    </Col>
  );
};

export default CurrentTicket;
