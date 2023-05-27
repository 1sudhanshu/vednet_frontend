import React from "react";
import { Row, Col, Label, InputGroup, InputGroupText } from 'reactstrap';
import { FirstName, LastName, Username } from '../../../../../Constant/index';
import { useForm } from "react-hook-form";

const Row1 = () => {
  const { register, formState: { errors } } = useForm();
  return (
    <Row className="g-2">
      <Col md="4" className="mb-3">
        <Label>{FirstName}</Label>
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true })}
        />
        <span style={{ color: "red" }}>
          {errors.firstName && "First name is required"}
        </span>
        <div className="invalid-feedback">Looks good!</div>
      </Col>
      <Col md="4" className="mb-3">
        <Label htmlFor="validationCustom02">{LastName}</Label>
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          {...register("Lastname", { required: true })}
        />
        <span style={{ color: "red" }}>
          {errors.Lastname && "Last name is required"}
        </span>
        <div className="valid-feedback">Looks good!</div>
      </Col>
      <Col md="4" className=" mb-3">
        <Label htmlFor="validationCustomUsername">{Username}</Label>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            {...register("Username", { required: true })}
          />
          <span style={{ color: "red" }}>
            {errors.Username && "User name is required"}
          </span>
          <div className="invalid-feedback">Please choose a username.</div>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Row1;