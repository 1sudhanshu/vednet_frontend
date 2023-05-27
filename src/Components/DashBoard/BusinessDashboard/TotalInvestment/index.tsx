import ReactApexChart from "react-apexcharts";
import { options5 } from "../../../../Data/DashBoard/BusinessDashboard/TotalInvestment";
import { Card, CardBody } from "reactstrap";
import {NumberofRevenueGrowth,TotalInvestmentHeading,} from "../../../../Constant";
import TotalInvestmentFooter from "./TotalInvestmentFooter";
import HeadingCommon from "../../../../Common/HeadingCommon";

const TotalInvestment = () => {
  return (
    <Card className=" investments card-with-border">
      <HeadingCommon className="card-no-border" dangerouslySetInnerHTML={NumberofRevenueGrowth} Heading={TotalInvestmentHeading}/>
      <CardBody className=" p-0">
        <div id="circlechart">
          <ReactApexChart options={options5} series={options5.series} type="radialBar" height={405}/>
        </div>
      </CardBody>
      <TotalInvestmentFooter />
    </Card>
  );
};
export default TotalInvestment;
