import { useState } from "react";
import { Card, CardBody,  Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchSpinSteps } from "../../../Constant";

const StepValues = () => {
  const spanText = ` Add <code>.data-bts-step="VALUE"</code> attribute for increament and decrement steps to touchspin input group.`;
  const [val, setVal] = useState(20);
  let step = true;

  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchSpinSteps} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin val={val} setVal={setVal} step={step} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default StepValues;
