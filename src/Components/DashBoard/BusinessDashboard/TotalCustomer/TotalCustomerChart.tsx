import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { options2 } from "../../../../Data/DashBoard/BusinessDashboard/ChartData";

const TotalCustomerChart = () => {
  return (
    <div className="media-right">
      <CardBody className=" p-0">
        <div className="apex-chart-container">
          <ReactApexChart
            options={options2}
            series={options2.series}
            type="area"
            height={120}
          />
        </div>
      </CardBody>
    </div>
  );
};

export default TotalCustomerChart;
