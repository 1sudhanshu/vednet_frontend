import Breadcrumbs from "../../../CommonElements/Breadcrumbs/index";
import GoogleChartContainer from "../../../Components/Charts/GoogleChart";

const GoogleChart = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Chart" title="Google Chart" />
      <GoogleChartContainer />
    </div>
  );
};

export default GoogleChart;
