import { Card, Col } from "reactstrap";
import { EventTrigger } from "../../../../Constant";
import MegaFormCardBody from "./MegaFormCardBody";
import MegaFormCardFooter from "./MegaFormCardFooter";
import HeadingCommon from "../../../../Common/HeadingCommon";

const MegaFormsCard = () => {
  return (
    <Col sm="12" md="12" lg ="12">
      <Card className="card-custom">
        <HeadingCommon Heading={EventTrigger} />
        <MegaFormCardBody />
        <MegaFormCardFooter />
      </Card>
    </Col>
  );
};

export default MegaFormsCard;
