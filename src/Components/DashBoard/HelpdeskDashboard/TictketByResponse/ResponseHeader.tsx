import { CardHeader } from "reactstrap";
import HeadingWithButton from "../Common/HeadingWithButton";
import { H4 } from "../../../../AbstractElements";

const ResponseHeader = () => {
  return (
    <CardHeader className=" card-no-border">
      <HeadingWithButton tittle="Ticket By Request Type" />
      <H4 className="mb-0">198</H4>
      <div className="chart-value-box pull-right ticket-legend">
        <div className="value-square-box-primary" />
        <span>Approval</span>
        <div className="value-square-box-danger" />
        <span>Cancel</span>
        <div className="value-square-box-light" />
        <span>Other</span>
      </div>
      <small className="f-w-600">
        This Week
        <span className="font-primary">
          3.56% <i className="fa fa-caret-up" />
        </span>
      </small>
    </CardHeader>
  );
};

export default ResponseHeader;
