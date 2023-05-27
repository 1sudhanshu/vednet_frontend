import {  Col,  FormGroup, Input, Label, Row } from "reactstrap";
import { Btn,  H6 } from "../../../AbstractElements";
import {Done,CreateYourPassword,EnterNumber,EnterOTP,Href,NewPassword,ReceiveOtp,Resend,RetypePassword,Send,} from "../../../Constant";

const ForgetPasswordForm = () => {
  return (
    <form className="theme-form" onSubmit={(event) => event.preventDefault()}>
      <FormGroup>
        <Label>{EnterNumber}</Label>
        <Row className="g-2">
          <Col md="2">
            <Input className="mb-1" type="text" defaultValue="+ 91" />
          </Col>
          <Col md="7" xl="8">
            <Input className="mb-1" type="tel" defaultValue="000-000-0000" />
          </Col>
          <Col md="2">
            <Btn color="primary" className="m-0">{Send}</Btn>
          </Col>
        </Row>
      </FormGroup>
      <div className="text-center mt-4 mb-4">
        <span className="reset-password-link">
          {ReceiveOtp}&nbsp;&nbsp;
          <a className="btn-link text-danger" href={Href}>{Resend}</a>
        </span>
      </div>
      <FormGroup className="rounded p-4 opt-box">
        <Label className="pt-0">{EnterOTP}</Label>
        <Row className="g-2">
          <Col>
            <Input className="text-center opt-text" type="text" defaultValue={"00"} maxLength={2}/>
          </Col>
          <Col>
            <Input className="text-center opt-text" type="text" defaultValue={"00"} maxLength={2}/>
          </Col>
          <Col>
            <Input className="text-center opt-text" type="text" defaultValue={"00"} maxLength={2}/>
          </Col>
        </Row>
      </FormGroup>
      <H6 className="f-14 mt-4 mb-3 text-uppercase">{CreateYourPassword}</H6>
      <FormGroup>
        <Label>{NewPassword}</Label>
        <Input className="form-control" type="password" />
      </FormGroup>
      <FormGroup>
        <Label>{RetypePassword}</Label>
        <Input type="password" />
      </FormGroup>
      <Row className="mb-3 g-2 mb-2">
        <Col md="2">
          <Btn color="primary">{Done}</Btn>
        </Col>
      </Row>
    </form>
  );
};

export default ForgetPasswordForm;
