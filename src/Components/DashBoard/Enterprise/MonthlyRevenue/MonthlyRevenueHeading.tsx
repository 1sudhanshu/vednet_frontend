import { CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { LastWeek, MonthlyRevenueHead } from "../../../../Constant";

const MonthlyRevenueHeading = () => {
  return (
    <CardHeader className=" card-no-border">
      <div className="d-flex">
        <H5>{MonthlyRevenueHead}</H5>
        <Btn color="deafult" className="btn-outline-light">
          {LastWeek} <i className="fa fa-caret-down" />
        </Btn>
      </div>
    </CardHeader>
  );
};

export default MonthlyRevenueHeading;
