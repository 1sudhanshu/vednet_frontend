import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicLinkButton from "./DynamicLinkButton";

const LinksButtons = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Links And Buttons" />
        <CardBody>
          <UL className='simple-list'>
            <LI className="list-group-item list-group-item-action active" href="#">Cras justo odio</LI>
            <LI className="list-group-item-action" tag="a" href="#javascript">
              Dapibus ac facilisis in
            </LI>
            <DynamicLinkButton />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinksButtons;
