import { Card, Col } from "reactstrap";
import LiveOrderStatusCardHeader from "./LiveOrderStatusCardHeader";
import LiveOrderStatusCardBody from "./LiveOrderStatusCardBody";

const LiveOrderStatus = () => {
  return (
    <Col xl="7" lg="12" className="box-col-12">
      <Card>
        <LiveOrderStatusCardHeader />
        <LiveOrderStatusCardBody />
      </Card>
    </Col>
  );
};

export default LiveOrderStatus;
