import { CardHeader } from "reactstrap";
import { H4, H5, P } from "../../../../AbstractElements";
import PerformanceScoreDetails from "./PerformanceScoreDetails";

const CustomerSatisfactionHeader = () => {
  return (
    <CardHeader className="card-no-border resolve-complain">
      <H5>Customer Satisfaction</H5>
      <P>For a team, straightforward ticketing system, manage all of client communications.....</P>
      <div className="customers-details d-flex">
        <div className="complain-details ps-0 d-inline-block">
          <H4>6.8<span className="font-primary">8.74% <i className="fa fa-caret-up" /></span></H4>
          <span className="d-block">performance score</span>
        </div>
        <PerformanceScoreDetails />
      </div>
    </CardHeader>
  );
};

export default CustomerSatisfactionHeader;
