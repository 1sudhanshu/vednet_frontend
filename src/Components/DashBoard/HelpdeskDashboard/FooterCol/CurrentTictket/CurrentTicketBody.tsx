import { CardBody } from "reactstrap";
import { H4 } from "../../../../../AbstractElements";
import { Bar } from "react-chartjs-2";
import {CurrentTicketdata,CurrentTicketoptions,} from "../../../../../Data/Components/HelpdeskDashBoard/CurrentTicket";

const CurrentTicketBody = () => {
  return (
    <CardBody className=" pt-0">
      <H4 className="mb-0">198</H4>
      <small className="f-w-600">
        This Week
        <span className="font-primary">
          3.56% <i className="fa fa-caret-up" />
        </span>
      </small>
      <div className="tickets-bar">
        <div className="ct-chartbar flot-chart-container">
          <Bar
            height={90}
            options={CurrentTicketoptions}
            data={CurrentTicketdata}
          />
        </div>
      </div>
    </CardBody>
  );
};

export default CurrentTicketBody;
