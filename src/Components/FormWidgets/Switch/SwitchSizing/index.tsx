import { Col, Card} from "reactstrap";
import SwitchSizing from "./SwitchSizing";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { SwitchSizingHeading } from "../../../../Constant";
const SwitchSizingCard = () => {
  return (
    <Col sm="12" xl="4">
      <Card>
        <HeadingCommon Heading={SwitchSizingHeading} />
        <SwitchSizing />
      </Card>
    </Col>
  );
};

export default SwitchSizingCard;
