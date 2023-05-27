import { FormGroup, Input } from "reactstrap";

const CreditCardForm = () => {
  return (
    <form className="theme-form mega-form">
      <FormGroup className="mb-3">
        <Input type="text" placeholder="Card number" />
      </FormGroup>
      <FormGroup className="mb-3">
        <Input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="mb-3">
        <Input className="form-group" type="date" />
        <Input type="text" placeholder="Full Name" />
      </FormGroup>
    </form>
  );
};

export default CreditCardForm;
