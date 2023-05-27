import { useState } from "react";
import {Card,CardBody,Col,Popover,PopoverBody,PopoverHeader,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { BasicPopoverData } from "../../../Data/Components/UiKits/popover";
import CommonPopover from "./common/CommonPopover";
import HeadingCommon from "../../../Common/HeadingCommon";

const Basic = () => {
  const span = `Different Types Of Events Popover.`;
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon
          Heading="Basic Examples"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" className="example-popover" id="Popover-1">
              Click to toggle popover
            </Btn>
            <Popover
              placement="right"
              isOpen={popover}
              target="Popover-1"
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                And heres some amazing content. Its very engaging. Right?
              </PopoverBody>
            </Popover>
            {BasicPopoverData.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
