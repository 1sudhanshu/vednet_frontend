import { useState } from "react";
import { Btn, P } from "../../../../AbstractElements";
import Alerts from "../../../../CommonElements/Alert";

const CommonAlert = ({ item }: any) => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Alerts
      className="alert-dismissible"
      color={item.alertColor}
      isOpen={Open}
      target={"Alert-" + item.id}
    >
      {item.icon}
      <P dangerouslySetInnerHTML={{ __html: item.alertTxt }} />
      {item.closeBtn ? (
        <Btn
          onClick={Toggle}
          color={item.btnClose}
          className="btn-close"
          id={"Alert-" + item.id}
        >
          {item.span ? <span className={item.divCls}>dismiss</span> : null}
        </Btn>
      ) : (
        ""
      )}
    </Alerts>
  );
};

export default CommonAlert;

