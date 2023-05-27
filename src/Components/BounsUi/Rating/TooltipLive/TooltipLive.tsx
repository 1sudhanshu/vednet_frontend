import { Col, Card, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import TooltipLiveBody from "./TooltipLiveBody";

const TooltipLive = () => {
  return (
    <Col xl="6" lg="12">
      <Card>
        <CardHeader>
          <H5>Star Rating</H5>
        </CardHeader>
        <TooltipLiveBody />
      </Card>
    </Col>
  );
};

export default TooltipLive;
