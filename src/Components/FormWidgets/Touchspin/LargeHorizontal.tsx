import React, { useState } from "react";
import { Card, CardBody, Col, Input } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { LargeHorizontalTouchspin } from "../../../Constant";

const LargeHorizontal = () => {
  const [val, setVal] = useState(10);
  const onChangeHandel = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setVal(Number(event.target.value));
  };
  const Minus = () => {
    setVal(val - 1);
  };
  const Addition = () => {
    setVal(val + 1);
  };
  const spanText = `Add <code>.input-group-lg</code>class to input-group.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={LargeHorizontalTouchspin} H5ClassName="card-title"/>
        <CardBody>
          <fieldset>
            <div className="input-group input-group-lg bootstrap-touchspin">
              <Btn className="btn-square bootstrap-touchspin-down" onClick={Minus}>
                <i className="fa fa-minus"></i>
              </Btn>
              <Input className="touchspin" type="text" value={val} onChange={onChangeHandel}/>
              <Btn className="btn-square bootstrap-touchspin-up" onClick={Addition}>
                <i className="fa fa-plus"></i>
              </Btn>
            </div>
          </fieldset>
        </CardBody>
      </Card>
    </Col>
  );
};
export default LargeHorizontal;