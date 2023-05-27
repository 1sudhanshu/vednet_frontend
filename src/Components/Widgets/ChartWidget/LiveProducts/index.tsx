import { Card, Col, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import LiveProductsBody from "./LiveProductsBody";
import { liveProducts } from "../../../../Constant";

const LiveProducts = () => {
  return (
    <Col md="7" className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H5>{liveProducts}</H5>
          </CardHeader>
          <LiveProductsBody />
        </Card>
      </div>
    </Col>
  );
};

export default LiveProducts;
