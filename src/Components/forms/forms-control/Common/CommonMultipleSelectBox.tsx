import { FormGroup, Input, Label, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import { ExampleMultipleSelect } from "../../../../Constant";

interface propsType {
  inputClassName: string;
  inputId?: string;
  defaultValue?: string;
}
const CommonMultipleSelectBox = (props: propsType) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label className="mb-2">{ExampleMultipleSelect}</Label>
          <Input
            type="select"
            name="select"
            className={props.inputClassName && props.inputClassName}
            id={props.inputId && props.inputId}
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonMultipleSelectBox;
