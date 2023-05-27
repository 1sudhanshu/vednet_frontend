import React, { useState } from "react";
import { Check } from "react-feather";
import { Card, CardBody, Col, Input, InputGroupText } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchspinWithIcon } from "../../../Constant";

const TickIcon = () => {
  const spanText = `Add icon class in <code>data-bts-postfix</code>attribute to icon to postfix as well prefix.`;
  const [val, setVal] = useState(59);
  const onChangeHandel = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const number = Number(event.target.value);
    setVal(number);
  };
  const Minus = () => {
    setVal(val - 1);
  };
  const Addition = () => {
    setVal(val + 1);
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchspinWithIcon} H5ClassName="card-title"/>
        <CardBody>
          <div className="input-group bootstrap-touchspin">
            <Btn className="bootstrap-touchspin-down" onClick={Minus}>
              <i className="fa fa-minus"></i>
            </Btn>
            <Input className="touchspin" type="text" value={val} onChange={(e) => onChangeHandel(e)}/>
            <InputGroupText>
              <Check />
            </InputGroupText>
            <Btn
              className="btn-square bootstrap-touchspin-up"
              onClick={Addition}
            >
              <i className="fa fa-plus"></i>
            </Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TickIcon;