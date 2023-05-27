import { Alerts, Btn, P } from "../../../../AbstractElements";
import { useState } from "react";

const StaticAlert = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Alerts
      className="alert-dismissible"
      color="primary dark"
      isOpen={Open}
      target="Alert-1"
    >
      <Btn
        className="btn-close"
        color="deafult"
        id="Alert-1"
        onClick={Toggle}
      ></Btn>
      <P>
        <strong>Holy ! </strong>You can check in on some of those fields below.
      </P>
    </Alerts>
  );
};

export default StaticAlert;
