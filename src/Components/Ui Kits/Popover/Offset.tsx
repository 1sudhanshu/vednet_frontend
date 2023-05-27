import React, { useState } from "react";
import {Card,CardBody,Col,Popover,PopoverBody,PopoverHeader,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { OffsetPopoverData } from "../../../Data/Components/UiKits/popover";
import CommonPopover from "./common/CommonPopover";
import HeadingCommon from "../../../Common/HeadingCommon";

const Offset = () => {
  const span = `Popover With Offset To Tooltip.`;
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon
          Heading="Offset To Tooltip"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" className="example-popover" id="Popover-12">
              20px 20px
            </Btn>
            <Popover
              placement="top"
              isOpen={popover}
              target="Popover-12"
              offset={[20, 20]}
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </Popover>
            {OffsetPopoverData.map((popover, i) => {
              return <CommonPopover key={i} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;
