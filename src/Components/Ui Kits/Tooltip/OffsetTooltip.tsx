import React from "react";
import { Fragment } from "react";
import { Btn, ToolTip } from "../../../AbstractElements";
import {useState} from 'react';

const OffsetTooltip = () => {
    const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Fragment>
      <Btn color="primary" id="Tooltip-9" onClick={toggle}>20px 20px</Btn>
      <ToolTip placement="top" isOpen={tooltip} target="Tooltip-9" toggle={toggle} offset={[20, 20]}>Tooltip title</ToolTip>
    </Fragment>
  );
};

export default OffsetTooltip;
