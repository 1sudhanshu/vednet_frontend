import ReactApexChart from "react-apexcharts";
import { CardBody, Col, Row } from "reactstrap";
import { optionsproductchart } from "../../../../Data/widgets/Chart/ChartData";

const LiveProductsBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        <Row>
          <Col xs="12">
            <ReactApexChart
              options={optionsproductchart}
              series={optionsproductchart.series}
              type="line"
              id="chart-widget6"
              height={320}
            />
          </Col>
        </Row>
      </div>
    </CardBody>
  );
};

export default LiveProductsBody;
