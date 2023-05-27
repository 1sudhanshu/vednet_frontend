import { Col, Card, CardBody } from "reactstrap";
import OutlineColor from "./OutlineColor";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { OutlineColorVariant } from "../../../../Constant/index";

const OutlineColorCard = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon Heading={OutlineColorVariant} H5ClassName="card-title" />
        <CardBody>
          <OutlineColor />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineColorCard;
