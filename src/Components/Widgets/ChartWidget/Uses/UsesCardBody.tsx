import ReactApexChart from "react-apexcharts";
import { optionsuserchart } from "../../../../Data/widgets/Chart/ChartData";
import { CardBody, Col, Row } from "reactstrap";

const UsesCardBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        <Row>
          <Col xs="12">
            <ReactApexChart
              options={optionsuserchart}
              series={optionsuserchart.series}
              type="bubble"
              id="chart-widget9"
              height={320}
            />
          </Col>
        </Row>
      </div>
    </CardBody>
  );
};

export default UsesCardBody;
