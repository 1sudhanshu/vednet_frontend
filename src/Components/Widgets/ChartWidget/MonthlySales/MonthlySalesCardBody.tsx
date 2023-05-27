import ReactApexChart from "react-apexcharts";
import { CardBody, Col, Row } from "reactstrap";
import { optionssaleschart } from "../../../../Data/widgets/Chart/ChartData";

const MonthlySalesCardBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        <Row>
          <Col sm="12">
            <ReactApexChart
              options={optionssaleschart}
              series={optionssaleschart.series}
              type="radar"
              id="chart-widget8"
              height={300}
            />
          </Col>
        </Row>
      </div>
    </CardBody>
  );
};

export default MonthlySalesCardBody;
