import { Card, Col} from "reactstrap";
import { HorizontalFormLayout } from "../../../../Constant";
import HorizontalLayoutCardBody from "./HorizontalLayoutCardBody";
import HeadingCommon from "../../../../Common/HeadingCommon";
import HorizontalFormCardFooter from "./HorizontalFormCardFooter";

const HorizontalLayoutCard = () => {
  const spanNext = `Using the<a href="#javascript">card</a>component, you can extend the default collapse behavior to create an accordion.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={HorizontalFormLayout}dangerouslySetInnerHTML={spanNext}/>
        <HorizontalLayoutCardBody />
        <HorizontalFormCardFooter />
      </Card>
    </Col>
  );
};

export default HorizontalLayoutCard;
