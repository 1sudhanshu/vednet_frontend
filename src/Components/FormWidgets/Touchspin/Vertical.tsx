import { Card, CardBody, Col, Input } from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";
import { VerticalTouchspin } from "../../../Constant";

const Vertical = () => {
  const spanText = `Add <code>.touchspin-vertical</code>class for vertical touch spin input group.`;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={VerticalTouchspin} H5ClassName="card-title"/>
        <CardBody>
          <Input className="touchspin" type="number" defaultValue={80} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default Vertical;
