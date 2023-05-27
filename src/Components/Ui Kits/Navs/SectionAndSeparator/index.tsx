import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import SectionandSeparatorNav from "./SectionandSeparatorNav";
import DropdownExample from "./DropdownExample";

const SectionAndSeparator = () => {
  return (
    <Col lg="6">
      <Card className="height-equal" style={{ minHeight: "638px" }}>
        <HeadingCommon Heading="Section and Separator" />
        <CardBody>
          <SectionandSeparatorNav />
          <DropdownExample />
        </CardBody>
      </Card>
    </Col>
  );
};
export default SectionAndSeparator;
