import { Btn, H4, H6 } from "../../../../AbstractElements";
import SocialIcons from "../../../../Auth/SocialIcons";
import { LOGIN, LoginDetails, Password, RememberMe, YourName } from "../../../../Constant";
import { FormGroup, Input, Label } from 'reactstrap';

const LoginForm = () => {
  return (
    <div>
      <form onSubmit={(event)=>event.preventDefault()} className="theme-form">
        <H4>{LOGIN}</H4>
        <H6>{LoginDetails}</H6>
        <FormGroup>
          <Label className="pt-0">{YourName}</Label>
          <Input type="text" required />
        </FormGroup>
        <FormGroup>
          <Label className="col-form-label">{Password}</Label>
          <Input type="password" required />
        </FormGroup>
        <div className="checkbox p-0">
          <Input id="checkbox1" type="checkbox" />
          <Label htmlFor="checkbox1">{RememberMe}</Label>
        </div>
        <FormGroup className="row g-2 mt-3 mb-0">
          <Btn color="primary" className="d-block w-100" type="submit">{LOGIN}</Btn>
        </FormGroup>
        <SocialIcons/>
      </form>
    </div>
  );
};

export default LoginForm;
