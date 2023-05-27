import { Row, Col, Label, Input } from "reactstrap";

interface propsTypes {
  lineOffset: number;
  depthValue: number;
  topOffSet: number;
  valueHandler: (value: string, keys: string) => void;
}

const RowOne = (props: propsTypes) => {
  return (
    <Row>
      <Col lg="6">
        <Label>Depth</Label>
        <Input
          type="number"
          value={props.depthValue}
          name="depthValue"
          onChange={(e) => props.valueHandler(e.target.value, e.target.name)}
        />
      </Col>      
      <Col lg="6">
        <Label>Vertical line offset</Label>
        <Input
          type="number"
          name="lineOffset"
          value={props.lineOffset}
          onChange={(e) => props.valueHandler(e.target.value, e.target.name)}
        />
      </Col>
    </Row>
  );
};

export default RowOne;
