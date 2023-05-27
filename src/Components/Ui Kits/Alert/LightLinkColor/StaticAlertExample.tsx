import React from "react";
import { Alerts } from "../../../../AbstractElements";

const StaticAlertExample = () => {
  return (
    <Alerts color="primary ">
      This is a primary alert with
      <a className="alert-link" href="#javascript">
        an example link
      </a>
      .Click It
    </Alerts>
  );
};

export default StaticAlertExample;
