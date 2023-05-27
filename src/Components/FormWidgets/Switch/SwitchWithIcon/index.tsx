import { Col } from "react-bootstrap";
import { Card } from "reactstrap";
import SwitchIcon from "./SwitchIcon";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { SwitchWithIcon } from "../../../../Constant";

const SwitchWithIconCard = () => {
  return (
    <Col sm="12" xl="4">
      <Card>
        <HeadingCommon Heading={SwitchWithIcon} />
        <SwitchIcon />
      </Card>
    </Col>
  );
};

export default SwitchWithIconCard;
