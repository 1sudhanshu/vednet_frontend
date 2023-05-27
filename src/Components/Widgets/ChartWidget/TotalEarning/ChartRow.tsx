import ReactApexChart from "react-apexcharts";
import { Col, Row } from "reactstrap";
import { optionsearningchart } from "../../../../Data/widgets/Chart/ChartData";

const ChartRow = () => {
  return (
    <Row>
      <Col xs="12">
        <ReactApexChart
          options={optionsearningchart}
          series={optionsearningchart.series}
          type="radialBar"
          id="chart-widget5"
          height={360}
        />
      </Col>
    </Row>
  );
};

export default ChartRow;
