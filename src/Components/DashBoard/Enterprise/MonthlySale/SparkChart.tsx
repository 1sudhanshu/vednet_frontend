import ReactApexChart from "react-apexcharts";
import { sparklineData } from "../../../../Data/DashBoard/Enterprise/ChatData";
import { LI } from "../../../../AbstractElements";

const SparkChart = () => {
  return (
    <LI>
      <div className="apex-spark">
        <ReactApexChart id="spark3" options={sparklineData} series={sparklineData.series} type="area" height={80} />
      </div>
    </LI>
  );
};

export default SparkChart;
