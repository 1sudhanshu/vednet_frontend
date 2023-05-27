import { Card, Col, CardHeader } from "reactstrap";
import MonthlySalesCardBody from "./MonthlySalesCardBody";
import { H5 } from "../../../../AbstractElements";
import { monthlySales } from "../../../../Constant";

const MonthlySales = () => {
  return (
    <Col md="5" className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H5>{monthlySales}</H5>
          </CardHeader>
          <MonthlySalesCardBody />
        </Card>
      </div>
    </Col>
  );
};

export default MonthlySales;
