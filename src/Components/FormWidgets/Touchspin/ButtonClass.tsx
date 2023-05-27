import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { ChangeButtonClassToLink } from "../../../Constant";

const ButtonClass = () => {
  const [val, setVal] = useState(25);
  const spanText = `Add <code>.attribute to change button</code>Class.`;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={ChangeButtonClassToLink} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin setVal={setVal} val={val} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ButtonClass;
