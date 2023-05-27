import ReactApexChart from "react-apexcharts";
import { Col, Row } from "reactstrap";
import { optionscolumnchart } from "../../../../Data/widgets/Chart/ChartData";

const ChartRow = () => {
  return (
    <Row>
      <Col xs="12">
        <ReactApexChart
          options={optionscolumnchart}
          series={optionscolumnchart.series}
          type="bar"
          id="chart-widget4"
          height={350}
        />
        <div />
      </Col>
    </Row>
  );
};

export default ChartRow;
