import React, { useState } from "react";
import { Alerts, Btn, P } from "../../../../AbstractElements";

const StaticAlertExample = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Alerts
      className="alert-dismissible"
      color="primary inverse"
      isOpen={Open}
      target="Alert-1"
    >
      <i className="icon-timer"></i>
      <P>
        Your time Over after <b>5</b> miniute
      </P>
      <Btn
        className="btn-close"
        color="deafult"
        id="Alert-1"
        onClick={Toggle}
      ></Btn>
    </Alerts>
  );
};

export default StaticAlertExample;
