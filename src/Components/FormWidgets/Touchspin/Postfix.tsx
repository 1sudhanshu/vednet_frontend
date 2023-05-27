import { useState } from "react";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchspinwithPostfix } from "../../../Constant";

const Postfix = () => {
  const spanText = `Add <code>.data-bts-postfix="POSTFIX_VALUE"</code> attribute to input to add postfix to touchspin input group.`;
  const [val, setVal] = useState(30);
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
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchspinwithPostfix} H5ClassName="card-title"/>
        <CardBody>
          <InputGroup className="input-group bootstrap-touchspin">
            <Btn className="bootstrap-touchspin-down" onClick={Minus}>
              <i className="fa fa-minus"></i>
            </Btn>
            <Input
              className="touchspin"
              type="text"
              value={val}
              onChange={(e) => onChangeHandel(e)}
            />
            <InputGroupText>%</InputGroupText>
            <Btn
              className="btn-square bootstrap-touchspin-up"
              onClick={Addition}
            >
              <i className="fa fa-plus"></i>
            </Btn>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Postfix;
