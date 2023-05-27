import { Card } from "reactstrap";
import SalesReport from "./SalesReport";
import {MonthlyRevenueGrowthHeading,NumberofThisMonthlyRevenueGrowth,} from "../../../../Constant";
import MonthlyRevenueGrowthBody from "./MonthlyRevenueGrowthBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const MonthlyRevenueGrowth = () => {
  return (
    <Card className=" card-with-border monthly-growth o-hidden">
      <HeadingCommon
        className="card-no-border"
        Heading={MonthlyRevenueGrowthHeading}
        dangerouslySetInnerHTML={NumberofThisMonthlyRevenueGrowth}
      />
      <MonthlyRevenueGrowthBody />
      <SalesReport />
    </Card>
  );
};

export default MonthlyRevenueGrowth;
