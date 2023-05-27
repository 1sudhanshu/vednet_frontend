import Breadcrumbs from "../../../CommonElements/Breadcrumbs/index";
import ChartJsContainer from "../../../Components/Charts/ChartJS";
const ChartJS = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Chart" title="Chart JS" />
      <ChartJsContainer />
    </div>
  );
};

export default ChartJS;
