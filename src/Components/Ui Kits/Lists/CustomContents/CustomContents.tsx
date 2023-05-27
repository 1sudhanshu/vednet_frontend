import { Card, CardBody, Col } from "reactstrap";
import CustomContentsBody from "./CustomContentsBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const CustomContents = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading="Custom Content" />
        <CardBody>
          <CustomContentsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomContents;
