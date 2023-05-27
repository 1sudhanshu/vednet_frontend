import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, ToolTip } from "../../../AbstractElements";
import OffsetTooltip from "./OffsetTooltip";
import HeadingCommon from "../../../Common/HeadingCommon";

const HtmlElementAndOffsets = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const tooltips = "Tooltip with HTML";
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="HTML Element And Offset" />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" id="Tooltip-5">Click me</Btn>
            <ToolTip placement="top" toggle={toggle} isOpen={tooltip} target="Tooltip-5">
              {tooltips}
            </ToolTip>
            <OffsetTooltip />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlElementAndOffsets;
