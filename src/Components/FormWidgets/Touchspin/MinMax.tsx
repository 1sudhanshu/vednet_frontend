import React, { useState } from "react";
import { Card, CardBody, Col, Input } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { MinMaxValueOfTouchspin } from "../../../Constant";

const MinMax = () => {
  const spanText = ` Use <code>.data-bts-min="VALUE" data-bts-max="VALUE"</code>attribute to input to set min and max value of touchspin input.`;
  const [val, setVal] = useState(22);

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
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={MinMaxValueOfTouchspin} H5ClassName="card-title"/>
        <CardBody>
          <div className="input-group bootstrap-touchspin">
            <Btn
              color="primary"
              className="bootstrap-touchspin-down"
              onClick={Minus}
            >
              <i className="fa fa-minus"></i>
            </Btn>
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
export default MinMax;