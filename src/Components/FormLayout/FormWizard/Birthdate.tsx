import { Row, Col, Form, Label, Input } from 'reactstrap';
import { DD, MM, YY, Submit } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
interface propsTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

const Birthdate = (props: propsTypes) => {
  const submitFun = () => {
    alert('successfully updated');
  };
  return (
      <Row>
        <Col sm="12">
          <Form className="needs-validation" noValidate>
            <Row form>
              <Col md="12 mb-3">
                <Label>{DD}</Label>
                <Input className="form-control" type="number" placeholder="DD" required />
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
              <Col md="12 mb-3">
                <Label>{MM}</Label>
                <Input className="form-control" type="number" placeholder="MM" required />
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
              <Col md="12 mb-3">
                <Label>{YY}</Label>
                <Input className="form-control" type="number" placeholder="YY" required />
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
            </Row>
            <Btn color='primary' onClick={() => props.setGoSteps(props.goSteps-1)}>previous</Btn>
            <Btn color='primary' className= 'mx-2' onClick= {submitFun} >{Submit}</Btn>
          </Form>
        </Col>
      </Row>
  );
};
export default Birthdate;