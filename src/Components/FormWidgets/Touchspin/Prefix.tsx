import React, { useState } from "react";
import { Card, CardBody, Col, Input, InputGroupText } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchspinwithPrefix } from "../../../Constant";

const Prefix = () => {
  const spanText = `Add <code>data-bts-prefix="PREFIX_VALUE"</code> attribute to input to add prefix to touchspin input group.`;
  const [val, setVal] = useState(10);
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
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchspinwithPrefix} H5ClassName="card-title"/>
        <CardBody>
          <div className="input-group bootstrap-touchspin">
            <Btn
              color="primary"
              className="bootstrap-touchspin-down"
              onClick={Minus}
            >
              <i className="fa fa-minus"></i>
            </Btn>
            <InputGroupText>#</InputGroupText>
            <Input
              className="touchspin"
              type="text"
              value={val}
              onChange={(e) => onChangeHandel(e)}
            />
            <Btn
              color="primary btn-square"
              className="bootstrap-touchspin-up"
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
export default Prefix;
