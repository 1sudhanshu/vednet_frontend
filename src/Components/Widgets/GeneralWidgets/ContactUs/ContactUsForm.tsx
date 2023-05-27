import React from "react";
import { Form, Input, Label } from "reactstrap";
import {  email, message, sendIt, yourName } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";

const ContactUsForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} className="theme-form">
      <div className="form-icon">
        <i className="icofont icofont-envelope-open txt-primary" />
      </div>
      <div className="mb-3">
        <Label>{yourName}</Label>
        <Input type="text" placeholder="John Dio" />
      </div>
      <div className="mb-3">
        <Label className="col-form-label">{email}</Label>
        <Input type="email" placeholder="Demo@gmail.com" />
      </div>
      <div className="mb-3">
        <Label className="col-form-label">{message}</Label>
        <textarea
          className="form-control textarea"
          rows={3}
          cols={50}
          placeholder="Your Message"
        />
      </div>
      <div className="text-sm-end">
        <Btn color="deafult" className=" btn-primary-gradien">{sendIt}</Btn>
      </div>
    </Form>
  );
};
export default ContactUsForm;