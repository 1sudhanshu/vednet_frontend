import { useState } from "react";
import { Card, CardBody,  Col } from "reactstrap";
import CommonTouchSpin from "./Common";
import HeadingCommon from "../../../Common/HeadingCommon";
import { DecimalValueOfTouchspin } from "../../../Constant";

const DecimalValues = () => {
  const spanText = ` Use <code>data-bts-decimal="VALUE"</code> attribute to use decimal value of touchspin input.`;
  const [val, setVal] = useState(53.25);
  let decimal = true;

  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={DecimalValueOfTouchspin} H5ClassName="card-title"/>
        <CardBody>
          <CommonTouchSpin val={val} setVal={setVal} decimal={decimal} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default DecimalValues;
