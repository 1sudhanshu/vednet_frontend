import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { optionsCircle } from "../../../../Data/widgets/Chart/ChartData";

const SkillStatusBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        <ReactApexChart
          options={optionsCircle}
          series={optionsCircle.series}
          type="radialBar"
          id="circlechart"
          height={350}
        />
      </div>
    </CardBody>
  );
};

export default SkillStatusBody;
