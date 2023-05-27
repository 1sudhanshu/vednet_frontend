import { Btn } from "../../../../../AbstractElements";
import { FirstName, LastName, Username, State, City, Zip, SubmitForm, ZipError, StateError, cityError, UserNameError, ValidFeedBack,} from "../../../../../Constant";
import { useForm } from "react-hook-form";
import CheckBox from "./CheckBox";
import { Col, Form, Label, InputGroup, InputGroupText, Row,} from "reactstrap";

const Custom = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = (data: any) => {
    console.log(data, "data");
    if (data !== "") {
      alert("You submitted the form and stuff!");
    }
  };
  return (
    <Form className="needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="g-2">
        <Col md="4" className="mb-3">
          <Label>{FirstName}</Label>
          <input className="form-control" type="text" placeholder="First name" {...register("firstName", { required: true })}/>
          <span style={{ color: "red" }}>{errors.firstName && "First name is required"}</span>
          <div className="invalid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md="4" className="mb-3">
          <Label htmlFor="validationCustom02">{LastName}</Label>
          <input className="form-control" type="text" placeholder="Last name" {...register("Lastname", { required: true })}/>
          <span style={{ color: "red" }}>{errors.Lastname && "Last name is required"}</span>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md="4" className=" mb-3">
          <Label htmlFor="validationCustomUsername">{Username}</Label>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <input className="form-control" type="text" placeholder="Username" {...register("Username", { required: true })}/>
            <span style={{ color: "red" }}>{errors.Username && "User name is required"}</span>
            <div className="invalid-feedback">{UserNameError}</div>
          </InputGroup>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md="6" className=" mb-3">
          <Label htmlFor="validationCustom03">{City}</Label>
          <input className="form-control" id="validationCustom03" type="text" placeholder="City" {...register("City", { required: true })}/>
          <span style={{ color: "red" }}>{errors.City && "City is required"}</span>
          <div className="invalid-feedback">{cityError}</div>
        </Col>
        <Col md="3" className="mb-3">
          <Label htmlFor="validationCustom04">{State}</Label>
          <input className="form-control" id="validationCustom04" type="text" placeholder="State" {...register("State", { required: true })}/>
          <span style={{ color: "red" }}>{errors.State && "State is required"}</span>
          <div className="invalid-feedback">{StateError}</div>
        </Col>
        <Col md="3" className=" mb-3">
          <Label htmlFor="validationCustom05">{Zip}</Label>
          <input className="form-control" id="validationCustom05" type="text" placeholder="Zip" {...register("Zip", { required: true })}/>
          <span style={{ color: "red" }}>{errors.Zip && "Zip is required"}</span>
          <div className="invalid-feedback">{ZipError}</div>
        </Col>
      </Row>
      <CheckBox />
      <Btn color="primary" type="submit">{SubmitForm}</Btn>
    </Form>
  );
};

export default Custom;