import { Col, Card } from "reactstrap";
import { BreckpointSpecific } from "../../../../../Constant";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import BreakPoint1 from "./BreakPoint1";
import BreakPoint2 from "./BreakPoint2";
import BreakPoint3 from "./BreakPoint3";
import BreakPoint4 from "./BreakPoint4";

const BreckpointClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={BreckpointSpecific} />
        <BreakPoint1 />
        <BreakPoint2 />
        <BreakPoint3 />
        <BreakPoint4 />
      </Card>
    </Col>
  );
};

export default BreckpointClass;
