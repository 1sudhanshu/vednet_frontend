import { Form, FormGroup, Input } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Login } from "../../../../Constant";

const FormWithoutLabel = () => {
  return (
    <Form className="row row-cols-sm-3 theme-form mt-3 form-bottom">
      <FormGroup className="mb-3 d-flex">
        <Input
          type="text"
          name="inputUnlabelUsername"
          placeholder="Username"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className="mb-3 d-flex">
        <Input
          type="password"
          name="inputPassword"
          placeholder="Password"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <Btn color="secondary" type="reset">
          {Login}
        </Btn>
      </FormGroup>
    </Form>
  );
};

export default FormWithoutLabel;
