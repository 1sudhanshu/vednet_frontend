import { Form, FormGroup, Input, Label } from "reactstrap";
import { Login, Password, Username } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";

const FormWithLabel = () => {
  return (
    <Form className="row form-inline theme-form mt-3">
      <FormGroup className="col-xxl-4 mb-3 d-flex">
        <Label className="col-form-label pe-2">{Username}</Label>
        <Input
          className="form-control"
          type="text"
          name="inputUsername"
          placeholder="Username"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className="col-xxl-4 mb-3 d-flex">
        <Label className="col-form-label pe-2">{Password}</Label>
        <Input
          className="form-control"
          type="password"
          name="inputPassword"
          placeholder="Password"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className="col-xxl-4 mb-3 d-flex">
        <Btn color="primary" type="reset">
          {Login}
        </Btn>
      </FormGroup>
    </Form>
  );
};

export default FormWithLabel;