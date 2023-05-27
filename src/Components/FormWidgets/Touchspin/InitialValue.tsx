import { useState } from "react";
import { Card, CardBody,  Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchspinwithInitialValue } from "../../../Constant";

const InitialValue = () => {
  const spanText = ` Add <code>data-bts-init-val="VALUE"</code> attribute attribute to set initial value for input group.`;
  const [val, setVal] = useState(53);

  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchspinwithInitialValue} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin val={val} setVal={setVal} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default InitialValue;
