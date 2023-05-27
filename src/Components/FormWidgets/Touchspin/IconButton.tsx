import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchspinWithIcon } from "../../../Constant";

const IconButton = () => {
  const [val, setVal] = useState(55);
  const spanText = ` Use <code>.data-bts-button-down-txt & data-bts-button-up-txt</code> attribute to set touchspin icon button.`;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchspinWithIcon} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin setVal={setVal} val={val} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default IconButton;