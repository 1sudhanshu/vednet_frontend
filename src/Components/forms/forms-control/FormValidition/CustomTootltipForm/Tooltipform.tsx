import { Btn } from "../../../../../AbstractElements";
import {FirstName,LastName,Username,State,City,Zip,SubmitForm,ValidFeedBack, FirstNameRequire, UserNameError, cityError, StateError, ZipError, TermsAndConditions,} from "../../../../../Constant";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {Col,Form,Label,FormGroup,InputGroup,InputGroupText,Row} from "reactstrap";

const Tooltipform = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();
  const [validateClass, setValidateClass] = useState(false);
  const onSubmit = ( data: any) => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
    }
  };
  return (
    <Form className={`needs-validation tooltip-validation ${validateClass && "validateClass "}`} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md="4 mb-3">
          <Label>{FirstName}</Label>
          <input className="form-control has-validation" type="text" placeholder="First name" {...register("firstName", { required: true })}/>
          {errors.firstName && (<span className="invalid-tooltip">{FirstNameRequire}</span>)}
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md="4 mb-3">
          <Label>{LastName}</Label>
          <input className="form-control" type="text" placeholder="Last name" {...register("lastName", { required: true })}/>
          <span>{errors.lastName && "Last name is required"}</span>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md="4 mb-3">
          <Label>{Username}</Label>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <input className="form-control" type="text" placeholder="Username" {...register("userName", { required: true })}/>
            <span className="invalid-tooltip">{errors.lastName && "User name is required"}</span>
            <div className="invalid-feedback">{UserNameError}</div>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md="6 mb-3">
          <Label>{City}</Label>
          <input className="form-control" type="text" placeholder="City" {...register("city", { required: true })}/>
          <span>{errors.city && "Please provide a valid city"}</span>
          <div className="invalid-feedback">{cityError}</div>
        </Col>
        <Col md="3 mb-3">
          <Label>{State}</Label>
          <input className="form-control" type="text" placeholder="State" {...register("state", { required: true })}/>
          <span>{errors.state && "Please provide a valid state."}</span>
          <div className="invalid-feedback">{StateError}</div>
        </Col>
        <Col md="3 mb-3">
          <Label>{Zip}</Label>
          <input className="form-control" type="text" placeholder="Zip" {...register("zip", { required: true })}/>
          <span>{errors.zip && "Please provide a valid zip."}</span>
          <div className="invalid-feedback">{ZipError}</div>
        </Col>
      </Row>
      <FormGroup>
        <div className="form-check">
          <div className="checkbox p-0">
            <input className="form-check-input form-control" id="invalidCheck3" type="checkbox"/>
            <Label className="form-check-label" htmlFor="invalidCheck3">{TermsAndConditions}</Label>
          </div>
        </div>
      </FormGroup>
      <Btn color="primary" onClick={() => setValidateClass(!validateClass)}>{SubmitForm}</Btn>
    </Form>
  );
};
export default Tooltipform;