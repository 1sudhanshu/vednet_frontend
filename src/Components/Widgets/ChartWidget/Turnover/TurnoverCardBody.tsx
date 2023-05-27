import ReactApexChart from "react-apexcharts";
import { optionsturnoverchart } from "../../../../Data/widgets/Chart/ChartData";
import { CardBody, Col, Row } from "reactstrap";

const TurnoverCardBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        <Row>
          <Col xs="12">
            <ReactApexChart
              options={optionsturnoverchart}
              series={optionsturnoverchart.series}
              type="area"
              id="chart-widget7"
              height={320}/>
          </Col>
        </Row>
      </div>
    </CardBody>
  );
};

export default TurnoverCardBody;
