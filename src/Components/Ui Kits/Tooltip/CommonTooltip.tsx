import React, { Fragment, useState } from "react";
import { Btn, ToolTip } from "../../../AbstractElements";
 interface arraytype {
  id?: number;
  placement?: string;
  tooltip?: string;
}
 interface propsTypes {
  item: arraytype;
}

const CommonTooltip = (props: propsTypes) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Fragment>
      <Btn color="primary" id={"Tooltip-" + props.item.id}>
        {props.item.tooltip}
      </Btn>
      <ToolTip
        placement={props.item.placement}
        isOpen={tooltip}
        target={"Tooltip-" + props.item.id}
        toggle={toggle}
      >
        {props.item.tooltip}
      </ToolTip>
    </Fragment>
  );
};

export default CommonTooltip;
