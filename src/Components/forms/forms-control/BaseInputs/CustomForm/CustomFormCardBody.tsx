import {  UploadFile } from "../../../../../Constant";
import { Row, Col, CardBody, Form, FormGroup, Label, Input } from "reactstrap";
import CustomFormCardFooter from "./CustomFormCardFooter";
import CustomSelectBox from "./CustomSelectBox";

const CustomFormCardBody = () => {
  return (
    <Form className="form theme-form">
      <CardBody>
        <Row>
          <Col>
            <FormGroup className="row">
              <Label className="col-sm-3 col-form-label">{UploadFile}</Label>
              <Col sm="9">
                <Input type="file" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <CustomSelectBox />
      </CardBody>
      <CustomFormCardFooter />
    </Form>
  );
};
export default CustomFormCardBody;
