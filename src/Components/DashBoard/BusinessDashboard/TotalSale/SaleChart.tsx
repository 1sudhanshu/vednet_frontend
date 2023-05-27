import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { options1 } from "../../../../Data/DashBoard/BusinessDashboard/ChartData";

const SaleChart = () => {
  return (
    <div className="media-right">
      <CardBody className="p-0">
        <div className="apex-chart-container">
          <div id="timeline-chart1">
            <ReactApexChart
              options={options1}
              series={options1.series}
              type="area"
              height={120}
            />
          </div>
        </div>
      </CardBody>
    </div>
  );
};

export default SaleChart;
