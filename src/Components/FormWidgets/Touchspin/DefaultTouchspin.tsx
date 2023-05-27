import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { DefaultTouchspin } from "../../../Constant";

const DefaultTouchSpin = () => {
  const [val, setVal] = useState<number>(40);
  const spanText = `Add <code>.touchspin</code> class to input to add touchspin input group `;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={DefaultTouchspin} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin setVal={setVal} val={val} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultTouchSpin;
