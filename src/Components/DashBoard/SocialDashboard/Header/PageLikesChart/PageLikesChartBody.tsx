import { CardBody } from "reactstrap";
import { H4, P } from "../../../../../AbstractElements";
import { TotalPageLikes } from "../../../../../Constant";
import ReactApexChart from "react-apexcharts";
import { socialChartOptions } from "../../../../../Data/DashBoard/Social Dashboard/Header/ChartData";
import { ArrowUp } from "react-feather";

const PageLikesChartBody = () => {
  return (
    <CardBody className="p-0">
      <div className="likes-page">
        <H4 className="mb-0">
          1,597
          <span className="font-success f-12">
            <ArrowUp />5.6%
          </span>
        </H4>
        <P>{TotalPageLikes}</P>
      </div>
      <div className="apex-social">
        <ReactApexChart id="social-chart" options={socialChartOptions} series={socialChartOptions.series} type="area" height={244}/>
      </div>
    </CardBody>
  );
};

export default PageLikesChartBody;
