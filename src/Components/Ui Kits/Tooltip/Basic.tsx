import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Btn,  ToolTip } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";

const Basic = () => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Basic Tooltip" />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" id="TooltipExample">HoverMe</Btn>
            <ToolTip placement="top" isOpen={basictooltip} target="TooltipExample" toggle={toggle}>PopoverTitle</ToolTip>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
