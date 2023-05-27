import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { areaSpaLineOptions } from "../../../../../Data/DashBoard/Enterprise/project-overview/ChartData";
const TaskCompletionLevelBody = () => {
  return (
    <CardBody className="pt-0 o-hidden">
      <div className="spaline-container">
        <ReactApexChart id="area-spaline" options={areaSpaLineOptions} series={areaSpaLineOptions.series} type="area" height={300} />
      </div>
    </CardBody>
  );
};
export default TaskCompletionLevelBody;
