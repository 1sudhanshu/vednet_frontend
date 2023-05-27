import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchspinMousewheelDisable } from "../../../Constant";

const MouseDisabled = () => {
  const [val, setVal] = useState(10);
  const spanText = ` Add <code>..touchspin-stop-mousewheel</code> class to diable mousewheel. `;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchspinMousewheelDisable} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin setVal={setVal} val={val} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default MouseDisabled;