import  { useState } from "react";
import {Card,CardBody,Col,Popover,PopoverBody,PopoverHeader,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { DirectionData } from "../../../Data/Components/UiKits/popover";
import CommonPopover from "./common/CommonPopover";
import HeadingCommon from "../../../Common/HeadingCommon";

const Directions = () => {
  const span = `Popover With Directions.`;
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Direction" dangerouslySetInnerHTML={span} />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" className="example-popover" id="Popover-4">
              Popover on top
            </Btn>
            <Popover
              placement="top"
              isOpen={popover}
              target="Popover-4"
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </Popover>
            {DirectionData.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;
