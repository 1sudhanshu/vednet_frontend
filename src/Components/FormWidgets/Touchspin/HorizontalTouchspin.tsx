import React, { useState } from "react";
import { Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { SmallHorizontalTouchspin } from "../../../Constant";

const HorizontalTouchspin = () => {
  const [val, setVal] = useState(70);
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
  const spanText = `Add <code>.input-group-sm</code>class to input-group.`;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={SmallHorizontalTouchspin} H5ClassName="card-title"/>
        <CardBody>
          <fieldset>
            <InputGroup className="input-group-sm bootstrap-touchspin">
              <Btn className="btn-square bootstrap-touchspin-down" onClick={Minus}>
                <i className="fa fa-minus"></i>
              </Btn>
              <Input className="touchspin" type="text" value={val} onChange={onChangeHandel}/>
              <Btn className=" btn-square bootstrap-touchspin-up" onClick={Addition}>
                <i className="fa fa-plus"></i>
              </Btn>
            </InputGroup>
          </fieldset>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HorizontalTouchspin;