import { Col, Card, CardHeader } from "reactstrap";
import ColorRangeCardBody from "./ColorRangeCardBody";
import { H5 } from "../../../../AbstractElements";

const ColorRange = () => {
  return (
    <Col xl="6" lg="12">
      <Card>
        <CardHeader>
          <H5>Heart Rating</H5>
        </CardHeader>
        <ColorRangeCardBody />
      </Card>
    </Col>
  );
};

export default ColorRange;
