import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ChartWidgetContainer from "../../../Components/Widgets/ChartWidget";

const ChartWidget = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Widgets" title="Chart Widget" />
      <ChartWidgetContainer />
    </div>
  );
};

export default ChartWidget;
