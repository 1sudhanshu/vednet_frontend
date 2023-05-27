import { Row, FormGroup, Input, Label, Col } from "reactstrap";
interface propsTypes {
  valueHandler: (value: boolean, keys: string) => void;
  verticalLines: boolean;
  DisableLines: boolean;
  horizontalLines: boolean;
}
const CbRow = (props: propsTypes) => {
  return (
    <Row className="mt-5">
      <Col lg="4">
        <FormGroup check inline>
          <Input
            type="checkbox"
            id="verticalLines"
            checked={props.verticalLines}
            onChange={(e) =>
              props.valueHandler(e.target.checked, e.target.name)
            }
            name="verticalLines"
          />
          <Label for="verticalLines">Disable vertical lines</Label>
        </FormGroup>
      </Col>

      <Col lg="4">
        <FormGroup check inline>
          <Input
            type="checkbox"
            id="horizontalLines"
            name="horizontalLines"
            checked={props.horizontalLines}
            onChange={(e) =>
              props.valueHandler(e.target.checked, e.target.name)
            }
          />
          <Label check for="horizontalLines">
            Disable horizontal lines
          </Label>
        </FormGroup>
      </Col>

      <Col lg="4">
        <FormGroup check inline>
          <Input
            type="checkbox"
            id="DisableLines"
            name="DisableLines"
            checked={props.DisableLines}
            onChange={(e) =>
              props.valueHandler(e.target.checked, e.target.name)
            }
          />
          <Label id="DisableLines" check>
            Disable lines
          </Label>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CbRow;
