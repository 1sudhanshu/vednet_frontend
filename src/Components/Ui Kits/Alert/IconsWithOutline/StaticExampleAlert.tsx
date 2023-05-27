import  { useState } from "react";
import { Alerts, Btn, P } from "../../../../AbstractElements";
import { Clock } from "react-feather";

const StaticExampleAlert = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Alerts
      className="alert-dismissible"
      color="primary outline"
      isOpen={Open}
      target="Alert-1"
    >
      <Clock />
      <P>You can check in on some of those fields below.</P>
      <Btn
        className="btn-close"
        color="deafult"
        id="Alert-1"
        onClick={Toggle}
      ></Btn>
    </Alerts>
  );
};

export default StaticExampleAlert;
