import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, ToolTip } from "../../../AbstractElements";
import CommonTooltip from "./CommonTooltip";
import { ToolTipDirectionsData } from "../../../Data/Components/UiKits/Tooltip";
import HeadingCommon from "../../../Common/HeadingCommon";

const Directions = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Direction" />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" id="Tooltip-1">Tooltip on top</Btn>
            <ToolTip placement="top" isOpen={tooltip} target="Tooltip-1" toggle={toggle}>Tooltip on top</ToolTip>
            {ToolTipDirectionsData.map((item, i) => (<CommonTooltip key={i} item={item} />))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;
