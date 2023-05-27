import { Card, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {CreateYourPassword,Done,NewPassword,RetypePassword,} from "../../../Constant";
import { Btn } from "../../../AbstractElements";

const ResetPasswordForm = () => {
  return (
    <Card className="mt-4 p-4">
      <form className="theme-form" onSubmit={(event) => event.preventDefault()}>
        <h5 className="f-16 mb-3 f-w-600">{CreateYourPassword}</h5>
        <FormGroup>
          <Label>{NewPassword}</Label>
          <Input type="password" placeholder="*****" />
        </FormGroup>
        <FormGroup>
          <Label>{RetypePassword}</Label>
          <Input type="password" placeholder="*****" />
        </FormGroup>
        <Row className="g-2 mb-0">
          <Col md="2">
            <Btn color="primary">{Done}</Btn>
          </Col>
        </Row>
      </form>
    </Card>
  );
};

export default ResetPasswordForm;
