import { Alerts, Btn, P } from "../../../../AbstractElements";
import { useState } from "react";

const AlertWithLightDismissStatic = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Alerts
      className="alert-dismissible"
      color="primary"
      isOpen={Open}
      target="Alert-1"
    >
      <P>
        <strong>Holy ! </strong> You can check in on some of those fields below.
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

export default AlertWithLightDismissStatic;
