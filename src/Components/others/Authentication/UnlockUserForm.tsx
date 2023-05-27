import { Card, Col, FormGroup, Input, Label } from "reactstrap";
import { EnteryourPassword, Unlock } from "../../../Constant";
import { Btn } from "../../../AbstractElements";

const UnlockUserForm = () => {
  return (
    <Card className="mt-4 p-4 mb-0">
      <form onSubmit={(event) => event.preventDefault()} className="theme-form">
        <FormGroup>
          <Label>{EnteryourPassword}</Label>
          <Input type="password" placeholder="*******" />
        </FormGroup>
        <FormGroup className="row g-2 mb-2">
          <Col md="2">
            <Btn color="primary">{Unlock}</Btn>
          </Col>
        </FormGroup>
      </form>
    </Card>
  );
};

export default UnlockUserForm;
