import { CardBody } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { ArrowUp } from "react-feather";
import MonthlyRevenueChart from "./MonthlyRevenueChart";

const MonthlyRevenueBody = () => {
  return (
    <CardBody className="pt-0">
      <div className="likes-page ps-0">
        <H4 className="mb-0">$46,814 <span className="font-danger f-12">
            <ArrowUp />
            1.8%
          </span>
        </H4>
      </div>
      <MonthlyRevenueChart />
    </CardBody>
  );
};

export default MonthlyRevenueBody;
