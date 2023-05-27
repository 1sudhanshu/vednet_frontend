import ReactApexChart from "react-apexcharts";
import { Apexmonthlyoptions } from "../../../../Data/DashBoard/Enterprise/ChatData";

const MonthlyRevenueChart = () => {
  return (
    <div className="apex-monthly">
      <ReactApexChart id="spark3 monthly" options={Apexmonthlyoptions} series={Apexmonthlyoptions.series} type="bar" height={192}/>
    </div>
  );
};

export default MonthlyRevenueChart;
