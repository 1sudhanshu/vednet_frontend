import Breadcrumbs from "../../../CommonElements/Breadcrumbs/index";
import ApexChartContainer from "../../../Components/Charts/ApexChart";
const ApexChart = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Chart" title="Apex Chart" />
      <ApexChartContainer />
    </div>
  );
};

export default ApexChart;
