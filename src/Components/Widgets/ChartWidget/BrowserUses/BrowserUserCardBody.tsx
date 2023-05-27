import ReactApexChart from "react-apexcharts";
import { optionscandlestickchart } from "../../../../Data/widgets/Chart/ChartData";
import { CardBody } from "reactstrap";

const BrowsweUserCardBody = () => {
  return (
    <CardBody>
      <ReactApexChart
        options={optionscandlestickchart}
        series={optionscandlestickchart.series}
        type="candlestick"
        id="chart-widget13"
        height={500}
      />
    </CardBody>
  );
};

export default BrowsweUserCardBody;
