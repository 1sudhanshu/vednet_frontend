import { Btn } from "../../../AbstractElements";
import { Email, Password, ConfirmPassword } from "../../../Constant";
import { Row, Col, Form, Label, Input } from "reactstrap";

interface propsTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

const Emails = (props: propsTypes) => {
  return (
    <Row>
      <Col sm="12">
        <Form className="needs-validation" noValidate>
          <Row>
            <Col md="12 mb-3">
              <Label htmlFor="exampleFormControlInput1">{Email}</Label>
              <Input
                className="form-control"
                type="email"
                placeholder="name@example.com"
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label htmlFor="exampleInputPassword2">{Password}</Label>
              <Input
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label htmlFor="exampleInputPassword2">{ConfirmPassword}</Label>
              <Input
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col>
              <Btn color='primary' onClick={() => props.setGoSteps(props.goSteps-1)}>previous</Btn>
              <Btn color='primary' className= 'mx-2' onClick={() => props.setGoSteps(props.goSteps+1)}>Next</Btn>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Emails;
