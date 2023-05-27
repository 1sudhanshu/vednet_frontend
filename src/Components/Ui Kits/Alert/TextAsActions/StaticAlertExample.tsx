import { useState } from "react";
import { Alerts, Btn, P } from "../../../../AbstractElements";

const StaticAlertExample = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Alerts
      color="primary inverse alert-dismissible "
      isOpen={Open}
      target="Alert-1"
    >
      <i className="icon-timer"></i>
      <P>
        {"Your time Over after"} <b>{"5"}</b> {"miniute"}
      </P>
      <Btn className="btn-close" color="deafult" id="Alert-1" onClick={Toggle}>
        <span className="bg-primary">dismiss</span>
      </Btn>
    </Alerts>
  );
};

export default StaticAlertExample;
