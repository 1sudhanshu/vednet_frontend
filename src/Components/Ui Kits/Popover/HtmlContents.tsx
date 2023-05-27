import { useState } from "react";
import {Card,CardBody,Col,Popover,PopoverBody,PopoverHeader,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import CommonPopover from "./common/CommonPopover";
import { HtmlContentsData } from "../../../Data/Components/UiKits/popover";
import HeadingCommon from "../../../Common/HeadingCommon";

const HtmlContents = () => {
  const span = `Popover Show HTML Content.`;
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  const Popoverbody = (
    <>
      {"Just add"} <code>{"data-html='true'"}</code>
      {"attribute and you can purse"}
      <span style={{ marginLeft: "3px", marginRight: "3px" }}>
        <b>{"html"}</b>
      </span>
      {"code"}
    </>
  );

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="HTML Content" dangerouslySetInnerHTML={span} />
        <CardBody>
          <div className="btn-showcase">
            <Btn color="primary" className="example-popover" id="Popover-8">
              Popover on top
            </Btn>
            <Popover
              placement="top"
              isOpen={popover}
              target="Popover-8"
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>{Popoverbody}</PopoverBody>
            </Popover>
            {HtmlContentsData.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlContents;
