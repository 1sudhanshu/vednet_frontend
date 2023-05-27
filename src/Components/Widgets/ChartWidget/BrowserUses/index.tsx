import { Col, Card, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import BrowsweUserCardBody from "./BrowserUserCardBody";
import { browserUses } from "../../../../Constant";

const BrowserUses = () => {
  return (
    <Col sm="12" className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <CardHeader>
            <H5>{browserUses}</H5>
          </CardHeader>
          <BrowsweUserCardBody />
        </Card>
      </div>
    </Col>
  );
};

export default BrowserUses;
