import React from "react";
import { CardHeader } from "reactstrap";
import { Btn, H5, P } from "../../../../../AbstractElements";

const CurrentTicketHeader = () => {
  return (
    <CardHeader className=" card-no-border">
      <div className="d-flex">
        <H5>Current Ticket Status</H5>
        <Btn className="btn btn-outline-light" color="deafult">
          Last Week <i className="fa fa-caret-down" />
        </Btn>
      </div>
      <P className="f-12 mb-0">
      Tickets may be given a variety of statuses during the resolving.....
      </P>
      <div className="chart-value-box pull-right current-legend">
        <div className="value-square-box-primary" />
        <span>Open Tickets</span>
        <div className="value-square-box-light ms-3" />
        <span>Solved Ticket</span>
      </div>
    </CardHeader>
  );
};

export default CurrentTicketHeader;
