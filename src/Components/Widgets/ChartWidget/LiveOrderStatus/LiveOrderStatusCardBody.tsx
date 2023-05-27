import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { optionsLine } from "../../../../Data/widgets/Chart/ChartData";

const LiveOrderStatusCardBody = () => {
  return (
    <CardBody>
      <div className="chart-container widgets-order-chart">
        <ReactApexChart
          options={optionsLine}
          series={optionsLine.series}
          type="line"
          id="linechart"
          height={350}
        />
      </div>
    </CardBody>
  );
};

export default LiveOrderStatusCardBody;
