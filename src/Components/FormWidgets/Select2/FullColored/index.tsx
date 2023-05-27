import { Col, Card,  CardBody } from "reactstrap";
import FullColored from "./FullColored";
import { FullColoredVariant } from "../../../../Constant/index";
import HeadingCommon from "../../../../Common/HeadingCommon";
const FullColerdCard = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon H5ClassName="card-title" Heading={FullColoredVariant} />
        <CardBody>
          <FullColored />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullColerdCard;
