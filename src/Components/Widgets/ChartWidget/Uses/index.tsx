import ReactApexChart from "react-apexcharts";
import { optionsuserchart } from "../../../../Data/widgets/Chart/ChartData";
import { Card, Col, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { uses } from "../../../../Constant";
import UsesCardBody from "./UsesCardBody";

const Uses = () => {
  return (
    <Col md="7" className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H5>{uses}</H5>
          </CardHeader>
          <UsesCardBody />
        </Card>
      </div>
    </Col>
  );
};

export default Uses;
